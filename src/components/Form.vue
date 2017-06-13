<template>
    <div class="form-validate">
    
        <el-form ref="form" :model="form" label-width="80px">
    
            <el-form-item label="账号">
    
                <el-input v-model="account" v-validate="'required'" data-vv-as="您的账号" name="account" type="text" placeholder="请输入账号或者手机号码">
    
                </el-input>
    
                <span v-show="errors.has('account')" class="help is-danger col">{{ errors.first('account') }}</span>
    
            </el-form-item>
    
            <el-form-item label="密码">
    
                <el-input v-model="password" v-validate="'required'" data-vv-as="您的密码" name="password" placeholder="请输入您的密码">
    
                </el-input>
    
                <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
    
            </el-form-item>
    
            <el-form-item label="验证码" class="validate-input">
    
                <el-input v-model="verifyCode" v-validate="'required'" data-vv-as="您的验证码" name="verifyCode" type="text" placeholder='请输入验证码'>
    
                </el-input>
    
                <span class="verifyCode">
                    <img :src="verifyImg" alt="" @click="getCode()">
                </span>
    
                <span v-show="errors.has('verifyCode')" class="help is-danger">{{ errors.first('verifyCode') }}</span>
            </el-form-item>
    
            <el-form-item>
    
                <el-button type="primary" @click="login">立即登录</el-button>
    
                <el-button type="primary" @click="gotoIndex">返回首页</el-button>
    
            </el-form-item>
    
        </el-form>
    </div>
</template>
<script>
    export default {

        data() {

            return {

                verifyImg: '/common/getVerifyCode.json?',

                account: '',

                password: '',

                verifyCode: '',

                form: {}

            }

        },

        methods: {

            login() {

                this.$validator.validateAll().then(() => {

                    //  测试post请求

                    this.api.login({

                        merchantId: 1,

                        password: this.password,

                        type: "supplier",

                        userName: this.account,

                        verifyCode: this.verifyCode

                    }).then(res => {

                        if (res.success) {

                            this.$router.push({
    
                                path: '/list'
    
                            })

                        } else {

                            alert(res.message)

                        }

                    })

                }).catch(() => {

                    // eslint-disable-next-line

                    // alert('Correct them errors!');

                });

            },



            getCode() {

                this.verifyImg = this.verifyImg + Math.random()

            },

            gotoIndex() {

                this.$router.push({

                    path: '/index'

                })

            }

        }
    }
    
    require('../assets/scss/public/index.scss')
</script>