<template>
    <div class="fillcontain">
        <head-top></head-top>

        <template >
            <el-tabs style="margin-top: 10px" tabPosition="left" v-model="activeName">
                <el-tab-pane label="基本配置" name="first">
                    <template class="search_item">
                        <el-select v-model="type" placeholder="类型">
                            <el-option
                                    v-for="item in blocks"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </template>



                    <div class="search_item">
                        <el-input clearable placeholder="请输入标题" v-model="title" style="width: 250px">
                            <template slot="prepend">标题</template>
                        </el-input>
                    </div>

                    <div class="search_item">
                        <el-input  placeholder="请输入描述" v-model="tmp_data.desc" type="textarea" :rows="2" style="width: 250px" >

                        </el-input>

                    </div>

                    <div class="search_item">
                        <el-input clearable placeholder="页面总高度" v-model="tmp_data.height" style="width: 250px">
                            <template slot="prepend">页面总高度</template>
                        </el-input>
                    </div>

                    <div class="search_item">
                        <el-input clearable placeholder="活动限时秒数" v-model="tmp_data.time_limit_left" style="width: 250px">
                            <template slot="prepend">活动限时秒数</template>
                        </el-input>
                    </div>


                    <p class="search_item" style="font-size: 12px">上传模板封面:</p>
                    <el-upload

                            class="avatar-uploader"
                            action="http://yixsu.com/public/index.php/ADMINAPI/img/upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="img" :src="img" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>


                    <p class="search_item" style="font-size: 12px">上传背景图:</p>
                    <el-upload

                            class="avatar-uploader"
                            action="http://yixsu.com/public/index.php/ADMINAPI/img/upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess2"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="tmp_data.bg.src" :src="tmp_data.bg.src" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                    <div class="search_item">
                        <template>
                            <el-checkbox v-model="tmp_data.has_stock">是否有库存</el-checkbox>
                        </template>

                    </div>

                    <div class="search_item">
                        <template>
                            <el-checkbox v-model="tmp_data.can_add_extra_img">是否可增加图片</el-checkbox>
                        </template>

                    </div>

                    <div v-if="tmp_data.can_add_extra_img" class="search_item">
                        <el-input clearable placeholder="最多可增加图片数" v-model="tmp_data.add_extra_img_max" style="width: 250px">
                            <template slot="prepend">最多可增加图片数</template>
                        </el-input>
                    </div>

                    <div class="search_item">
                        <template>
                            <el-checkbox v-model="tmp_data.can_add_extra_text">是否可增加文本</el-checkbox>
                        </template>

                    </div>

                    <div v-if="tmp_data.can_add_extra_text" class="search_item">
                        <el-input clearable placeholder="最多可增加文本数" v-model="tmp_data.add_extra_text_max" style="width: 250px">
                            <template slot="prepend">最多可增加文本数</template>
                        </el-input>
                    </div>

                    <div style="margin-top: 20px;">
                        框架json:
                        <el-input @blur="gen_boxes_data()" placeholder="框架json" v-model="tmp_data.boxes_str" type="textarea" :rows="10" >

                        </el-input>

                    </div>

                    <!--<div class="search_item">-->
                        <!--<template>-->
                            <!--<el-checkbox v-model="tmp_data.code_mode">下一步:code形式编辑</el-checkbox>-->
                        <!--</template>-->

                    <!--</div>-->

                    <el-button type="success" style="width: 500px;margin-top:10px;margin-bottom: 10px" v-on:click="activeName='second'" >下一步</el-button>
                </el-tab-pane>
                <el-tab-pane label="元素配置" name="second">

                    <!--<template v-if="!tmp_data.code_mode">-->
                        <div style="border: 1px dashed #c0a16b;width: 480px;padding: 10px;position: relative;margin-top: 5px;" v-for="(item, index)  in tmp_data.page">
                            <el-button v-on:click="del_page_item(index)" type="info" icon="el-icon-close" circle size="mini" style="position: absolute;right: 0;top: 0;"></el-button>

                            <template class="search_item">
                                <el-select v-model="item.belong_box" value-key="name" placeholder="所属框架">
                                    <el-option
                                            v-for="item in boxes_options"
                                            :key="item.name"
                                            :label="item.name"
                                            :value="item">
                                    </el-option>
                                </el-select>

                            </template>
                            <br/>
                            <br/>

                            <template class="search_item">
                                <el-select v-model="item.type" placeholder="类型">
                                    <el-option
                                            v-for="item in types"
                                            :key="item"
                                            :label="item"
                                            :value="item">
                                    </el-option>
                                </el-select>
                            </template>

                            <div v-if="item.type == 'text' || item.type == 'sign'" class="search_item">
                                <el-input  placeholder="文本内容" v-model="item.text" type="textarea" :rows="2" >

                                </el-input>
                            </div>

                            <div class="search_item">
                                <el-input  placeholder="样式style" v-model="item.style" type="textarea" :rows="2" >

                                </el-input>

                            </div>

                            <div v-if="item.type == 'vote' " class="search_item">
                                <el-select v-model="item.style_type" placeholder="默认样式">
                                    <el-option
                                            v-for="item in [{key:0,value:'默认样式'},{key:1,value:'样式1'}]"
                                            :key="item.key"
                                            :label="item.value"
                                            :value="item.key">
                                    </el-option>
                                </el-select>
                            </div>

                            <div v-if="item.type == 'vote' " class="search_item">
                                <el-input clearable placeholder="数量" v-model="item.vote_num" style="width: 250px">
                                    <template slot="prepend">数量</template>
                                </el-input>
                            </div>

                            <div v-if="item.type == 'fight_group' " class="search_item">
                                <el-input clearable placeholder="价格(元)" v-model="item.fight_group_price" style="width: 250px">
                                    <template slot="prepend">价格(元)</template>
                                </el-input>
                            </div>

                            <div v-if="item.type == 'quick_buy' " class="search_item">
                                <el-input clearable placeholder="价格(元)" v-model="item.quick_buy_price" style="width: 250px">
                                    <template slot="prepend">价格(元)</template>
                                </el-input>
                            </div>

                            <div v-if="item.type == 'fight_group' " class="search_item">
                                <el-input clearable placeholder="成团人数" v-model="item.fight_group_number" style="width: 250px">
                                    <template slot="prepend">成团人数</template>
                                </el-input>
                            </div>

                            <div v-if="item.type == 'cutprice_price' " class="search_item">
                                <el-input clearable placeholder="原价(元)" v-model="item.cutprice_price" style="width: 250px" @blur="item.cutprice_max_minus_price = item.cutprice_price - item.cutprice_min_price">
                                    <template slot="prepend">原价(元)</template>
                                </el-input>
                            </div>
                            <!--<div v-if="item.type == 'cutprice_price' " class="search_item">-->
                                <!--<el-input clearable placeholder="最大优惠金额(元)" v-model="item.cutprice_max_minus_price" style="width: 250px">-->
                                    <!--<template slot="prepend">底价(元)</template>-->
                                <!--</el-input>-->

                            <!--</div>-->
                            <div v-if="item.type == 'cutprice_price' " class="search_item">
                                <el-input clearable placeholder="最大优惠金额(元)" v-model="item.cutprice_min_price" @blur="item.cutprice_max_minus_price = item.cutprice_price - item.cutprice_min_price" style="width: 250px">
                                    <template slot="prepend">底价(元)</template>
                                </el-input>

                            </div>
                            <div v-if="item.type == 'cutprice_price' " class="search_item">
                                <el-input clearable placeholder="平均每次可砍价(元)" v-model="item.cutprice_average_price" style="width: 250px">
                                    <template slot="prepend">平均每次可砍价(元)</template>
                                </el-input>
                            </div>


                            <div v-if="item.type == 'img'" class="search_item">
                                <p style="font-size: 12px">上传图片:</p>
                                <el-upload

                                        class="avatar-uploader"
                                        action="http://yixsu.com/public/index.php/ADMINAPI/img/upload"
                                        :show-file-list="false"
                                        :on-success="(res,file)=>{return handleAvatarSuccess3(res,file, index)}"
                                        :before-upload="beforeAvatarUpload">
                                    <img v-if="item.src" :src="item.src" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>

                            </div>

                            <div v-if="item.type == 'img' " class="search_item">
                                <el-input clearable placeholder="宽度" v-model="item.width" style="width: 250px">
                                    <template slot="prepend">宽度</template>
                                </el-input>
                            </div>

                            <div v-if="item.type == 'img' " class="search_item">
                                <el-input clearable placeholder="高度" v-model="item.height" style="width: 250px">
                                    <template slot="prepend">高度</template>
                                </el-input>
                            </div>


                            <div class="search_item">
                                <template>
                                    <el-checkbox v-model="item.is_available">是否可用</el-checkbox>
                                </template>

                            </div>


                            <div class="search_item">
                                <template>
                                    <el-checkbox v-model="item.can_del_block">能否删除</el-checkbox>
                                </template>
                            </div>

                        </div>
                        <el-button style="width: 500px;margin-top: 10px;margin-bottom: 10px" v-on:click="add_page_item" >+</el-button>
                        <br/>
                        <el-button type="success" style="width: 500px;margin-bottom: 10px" v-on:click="submit" :loading="loading">保存</el-button>

                    <!--</template>-->
                    <!--<template v-if="tmp_data.code_mode">-->

                        <!--<div >-->
                            <!--<el-input  placeholder="编辑代码" v-model="tmp_data.code_content" type="textarea" :rows="10" >-->

                            <!--</el-input>-->
                            <!--<br/>-->
                            <!--<br/>-->
                            <!--<el-button type="success" style="width: 500px;margin-bottom: 10px" v-on:click="submit" :loading="loading">保存</el-button>-->

                        <!--</div>-->
                    <!--</template>-->
                     </el-tab-pane>
            </el-tabs>
        </template>


        <!--<div style="position: fixed;top: 150px;right: 75px;">-->
            <!--<img style="position: absolute;width: 555px;right:-120px;top: -74px;z-index: -1" src="http://paz3jxo1v.bkt.clouddn.com/phone.png"/>-->
            <!--<iframe ref="iframe" class="embed-responsive-item" style="width: 298px;height:524px;" src=""></iframe>-->
            <!--<br/>-->
            <!--<el-button type="warning" style="color: #fff;text-align:center;width: 300px;margin-top: 80px" v-on:click="get_data" >刷新预览</el-button>-->
        <!--</div>-->



    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {managerrecommend_tmp_add,managerrecommend_cache_data,managerrecommend_tmp_info} from '@/api/getDataEarth'

    export default {
        data(){
            return {
                loading:false,
                id:0,
                activeName: 'first',
//                blocks:[{id:6,name:'拼团'},{id:2,name:'砍价'},{id:1,name:'限时特惠'},{id:7,name:'预约报名'},{id:3,name:'集赞'},{id:4,name:'投票'},{id:5,name:'图文'}],
                blocks:[{id:2,name:'砍价'},{id:7,name:'预约报名'},{id:3,name:'集赞'},{id:4,name:'投票'},{id:5,name:'图文'}],
                type:2,
                title:'',
                img:'',
                boxes_options:[],
                tmp_data:{
                    height:'100rpx',
                    desc:'',
                    bg:{src:''},
                    music:{},
                    boxes:[],
                    boxes_str:'[{"style":""}]',
                    time_limit_left:0,
                    add_extra_img_max:2,
                    add_extra_text_max:2,
                    has_stock:true,
                    can_add_extra_img:false,
                    can_add_extra_text:false,
                    page:[{ type:'text',
                        text:'',
                        src:'',
                        is_available:true,
                        can_del_block:false,
                        style:''}]
                },
//                types:['text','img','sign','quick_buy','timelimit','cutprice_btn','cutprice_price','praise','vote','fight_group']
                types:['text','img','sign','timelimit','cutprice_btn','cutprice_price','praise','vote','fight_group', 'sell_num', 'left_num','share','tel']

            }

        },
        components: {
            headTop,
        },
        created(){

        },
        mounted(){

            //console.log(this.$route.query);
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
                vm.id = to.query.id ? to.query.id : 0;
                if (vm.id) {
                    vm.get_tmp_info();
                } else {
                    vm.init();
                    vm.gen_boxes_data();
                }

        })
        },

        methods: {
            init() {
                this.boxes_options = [];
                this.activeName = 'first';
                this.type = 2;
                this.title = '';
                this.img = '';
                this.tmp_data = {
                    height:'100rpx',
                    desc:'',
                    bg:{src:''},
                    music:{},
                    boxes:[],
                    boxes_str:'[{"style":""}]',
                    time_limit_left:0,
                    has_stock:true,
                    add_extra_img_max:2,
                    add_extra_text_max:2,
                    can_add_extra_img:false,
                    can_add_extra_text:false,
                    page:[{ type:'text',
                        text:'',
                        src:'',
                        is_available:true,
                        can_del_block:false,
                        style:''}]
                };

            },
            get_tmp_info() {
                managerrecommend_tmp_info({id:this.id}).then(function(res){
                    if (res.code == this.$store.state.constant.status_success) {
                        this.activeName = 'first';
                        this.type = parseInt(res.data.type);
                        this.title = res.data.title;
                        this.img = res.data.img;
                        this.tmp_data = res.data.tmp_data;
                        this.gen_boxes_data();
                    }
                }.bind(this));
            },
            handleAvatarSuccess(res, file) {
                this.img = res.data;
            },
            beforeAvatarUpload(file) {
                const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('图片格式只支持jpg和png!');
                }
                if (!isLt2M) {
                    this.$message.error('图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleAvatarSuccess2(res, file) {
                this.tmp_data.bg.src = res.data;
            },
            handleAvatarSuccess3(res, file, index) {
                this.tmp_data.page[index].src = res.data;
            },
            add_page_item:function () {
                var tmp = {
                    type:'text',
                    text:'',
                    src:'',
                    is_available:true,
                    can_del_block:false,
                    style:''

                }
                this.tmp_data.page.push(tmp);
            },
            del_page_item:function(index){
                this.tmp_data.page.splice(index, 1);
            },
            get_data: function () {

                managerrecommend_cache_data({tmp_data:this.tmp_data}).then(function (response) {

                    if (response.success) {
                        this.$refs.iframe.src='http://yixsu.com/public/index.php/HomeManagerRecommend/Pages/index?is_preview=1';
                    } else {
                        alert('上传失败!')
                    }
                }.bind(this),response => {
                });

            },
            gen_boxes_data(){
                if (this.tmp_data.boxes_str) {
                    try{
                        this.tmp_data.boxes = JSON.parse(this.tmp_data.boxes_str);
                        var boxes_options = [];
                        this.tmp_data.boxes.forEach(function(e){
                            boxes_options.push({"name":e.name});
                            if (e.children) {
                                e.children.forEach(function(e1){
                                    boxes_options.push({"name":'--'+e1.name});
                                })
                            }
                        })
                        this.boxes_options = boxes_options;

                    } catch(e) {
                        this.$message({
                            type: 'warning',
                            message: '框架json错误,请检查!'
                        });
                        this.tmp_data.boxes = [];
                        this.boxes_options = [];
                        return false;
                    }
                    return true;
                }
            },
            submit: function () {
                if (!this.gen_boxes_data()) {
                    return;
                }
                this.$confirm('此操作将保存模板数据到商店, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
                    if (!this.title) {
                        var error_msg = '请填写标题';
                    }
                    if (!this.img) {
                        var error_msg = '请上传封面';
                    }
                    if (error_msg) {
                        this.$message({
                            type: 'warning',
                            message: error_msg
                        });
                        return;
                    }
                    this.loading = true;
                    managerrecommend_tmp_add({id:this.id,type:this.type,title:this.title,img:this.img,tmp_data:this.tmp_data}).then(function (response) {
                        if (response.success) {
                            this.$message({
                                message: response.message,
                                type: 'success'
                            });
                            this.$router.push({path:'managerrecommend_template_list',query:{}});
                        } else {
                            this.$message({
                                message: response.message,
                                type: 'warning'
                            });
                        }
                    }.bind(this),response => {
                    });

                }.bind(this)).catch(() => {

                }).finally(function(){
                    this.loading = false;
                }.bind(this));

            }

        }
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .search_item{

        margin-top: 10px;

    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
</style>
