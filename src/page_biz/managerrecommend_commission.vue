<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container" style="padding-bottom: 0">
            <el-input
                    style="display: inline-block;width: 250px;"
                    placeholder="店铺名称"
                    v-model="title"
                    clearable>
            </el-input>

            <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>

        </div>
        <div class="table_container">

            <el-table
                    :data="tableData"
                    style="width: 100%">

                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="店铺名称" >
                                <span>{{props.row.user.entity_title}}</span>
                            </el-form-item>
                            <el-form-item label="店铺地址" >
                                <span>{{props.row.user.address}}</span>
                            </el-form-item>
                            <el-form-item label="店铺联系" >
                                <span>{{props.row.user.entity_tel}}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>

                <el-table-column label="店铺名称" prop="user.entity_title"></el-table-column>
                <el-table-column label="总金额" prop="sum"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!--<el-button size="mini" @click="goto_edit(scope.row.id)">编辑</el-button>-->
                        <el-button size="mini" @click="show_cash_out(scope, 0)" :loading="loadingBtn == scope.$index">提现</el-button>
                        <!--<el-button size="mini" @click="del(scope.row, scope.$index)">删除</el-button>-->
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="limit"
                        layout="total, prev, pager, next"
                        :total="count"
                        background>
                </el-pagination>
            </div>

            <el-dialog title="提现" :visible.sync="dialogFormVisible" width="30%">
                <el-form >
                    <el-form-item label="提现金额(元)">
                        <el-input v-model="cash_out_sum" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="cash_out">确 定</el-button>
                </div>
            </el-dialog>

        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {managerrecommend_account_list, managerrecommend_account_cash_out} from '@/api/getDataEarth'
    export default {
        data(){
            return {
                tableData: [],
                limit: 10,
                count: 0,
                currentPage: 1,
                remark:'',
                choose_categories:[],
                categories:[{id:2,name:'店长'},{id:1,name:'顾客'}],
                title:'',
                loadingBtn:-1,
                cash_out_model:{},
                dialogFormVisible:false,
                cash_out_sum:0
            }
        },
        components: {
            headTop,
        },
        created(){
            this.list();
        },
        mounted(){

        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
                vm.list();
            })
        },
        methods: {
            list() {
                managerrecommend_account_list({page:this.currentPage,page_size:this.limit,title:this.title}).then(function(res){
                    if (res.code == this.$store.state.constant.status_success) {
                        this.tableData = res.data.list;
                        this.count = parseInt(res.data.count);
                    }
                }.bind(this));

            },
            handleCurrentChange(val){
                this.currentPage = val;
                this.list();
            },
            show_cash_out(prop) {
                this.dialogFormVisible = true;
                this.cash_out_model = prop;
            },
            cash_out(){
                managerrecommend_account_cash_out({uid:this.cash_out_model.row.uid,sum:this.cash_out_sum}).then(function(res){
                    if (res.code == this.$store.state.constant.status_success) {
                        this.$message({
                            showClose: true,
                            message: '操作成功',
                            type: 'success'
                        });
                        this.cash_out_model.row.sum = res.data;
                        this.dialogFormVisible = false;
                    } else {
                        this.$message({
                            showClose: true,
                            message: res.msg,
                            type: 'warning'
                        });
                    }
                }.bind(this));
                this.dialogFormVisible = false;
            },
            search() {
                this.currentPage = 1;
                this.list();
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .table_container{
        padding: 20px;
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
