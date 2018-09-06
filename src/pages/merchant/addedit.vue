<template>
    <div>
        <van-row class="merchant-add-container">
            <van-nav-bar :title="status==='add'?'新增商户':'编辑商户'" @click-left="back" left-text="返回" left-arrow />
            <van-row class="add-content">
                <van-field label="商户名称" v-model="model.name" placeholder="请输入商户名称" @input="changeInput('name')" :error-message="err.name.msg" />
                <van-field label="商户账号" v-model="model.name_sn" placeholder="请输入商户账号" @input="changeInput('name_sn')" :error-message="err.name_sn.msg" />
                <van-field label="手机号" v-model="model.phone" type="number" placeholder="请输入手机号" @input="changeInput('phone')" :error-message="err.phone.msg" />
                <van-field label="额度" v-model="model.amount" type="number" placeholder="请输入额度" @input="changeInput('amount')" :error-message="err.amount.msg" />
                <van-field label="商户冷却时间" v-model="model.cdtime" type="number" placeholder="请输入商户冷却时间" @input="changeInput('cdtime')" :error-message="err.cdtime.msg" />
                <van-field label="商户日限额" v-model="model.daylimits" type="number" placeholder="请输入商户日限额" @input="changeInput('daylimits')" :error-message="err.daylimits.msg" />
                <van-field label="费率" v-model="model.rate" type="number" placeholder="请输入费率" @input="changeInput('rate')" :error-message="err.rate.msg" />
                <van-field label="权重" v-model="model.weight" type="number" placeholder="请输入权重" @input="changeInput('weight')" :error-message="err.weight.msg" />
                <van-row class="van-field van-cell">
                    <van-col class="van-cell__title">是否上线</van-col>
                    <van-col>
                        <van-switch v-model="model.status" />
                    </van-col>
                </van-row>
                <ZdButton size="large" type="yellow" @click="add" v-if="status==='add'">新增</ZdButton>
                <ZdButton size="large" type="yellow" @click="edit" v-else>编辑</ZdButton>
            </van-row>
        </van-row>
    </div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import Form from "@/components/form";
    import ZdButton from "@/components/zdbutton";
    import url from "./api.actions.js";
    import Validate from '../../utils/validate'
    const FormItem = Form.Item;
    const rules = {
        name: {
            required: true
        },
        name_sn: {
            required: true
        },
        phone: {
            required: true
        },
        amount: {
            required: true
        },
        cdtime: {
            required: true
        },
        daylimits: {
            required: true
        },
        rate: {
            required: true
        },
        weight: {
            required: true
        }
    };
    const messages = {
        name: {
            required: "请输入商户名称"
        },
        name_sn: {
            required: "请输入商户账号"
        },
        phone: {
            required: "请输入手机号"
        },
        amount: {
            required: "请输入额度"
        },
        cdtime: {
            required: "请输入商户冷却时间"
        },
        daylimits: {
            required: "请输入商户日限额"
        },
        rate: {
            required: "请输入费率"
        },
        weight: {
            required: "请输入权重"
        }
    }
    export default {
        components: {
            Form,
            FormItem,
            ZdButton
        },
        mixins: [Emitter],
        created() {
            this.Validate = new Validate(rules, messages);
            this.initData();
        },
        destroyed() {
            Utils.storage.removeItem("MERCHANTINFO");
        },
        data: () => {
            return {
                checked: true,
                status: "add",
                Validate: null,
                model: {},
                err: {}
            };
        },
        methods: {
            back(){
             this.$router.back();
            },
            //  初始化err
            initData() {
                this.status = this.$route.params.status;
                Object.keys(rules).forEach(key => {
                    this.err[key] = {};
                    this.err[key]["hasErr"] = false;
                    this.err[key]["msg"] = null;
                    this.model[key] = null;
                    this.model["status"] = true;
                })
                this.err = Object.assign({}, this.err);
                this.model = Object.assign({}, this.model);
                if (this.status === "edit") {
                    let info = Utils.storage.getItem("MERCHANTINFO");
                    Object.keys(this.model).forEach(key => {
                        this.model[key] = info[key];
                        this.model["id"] = info.id;
                        this.model["status"] = info.status == 1 ? true : false;
                    })
                }
            },
            //  验证单个
            validateItem(param, rules, datas) {
                let {
                    err
                } = this;
                this.Validate.errorList = [];
                this.Validate.setView(param);
                this.Validate.checkParam(param, rules, datas);
                let errorList = this.Validate.validationErrors();
                if (errorList.length <= 0) {
                    err[param].hasErr = false;
                    err[param].msg = null;
                } else {
                    err[param].hasErr = true;
                    err[param].msg = errorList[0].msg;
                }
                this.err = err;
            },
            //  验证整个表单
            validateForm() {
                let result = false;
                if (!this.Validate.checkForm(this.model)) {
                    const error = this.Validate.errorList;
                    if (error.length > 0) {
                        error.forEach(item => {
                            let key = item["param"];
                            this.err[key].hasErr = true;
                            this.err[key].msg = item.msg;
                        })
                    }
                    result = false;
                } else {
                    result = true;
                }
                return result
            },
            //  改变每个元素的时候
            changeInput(type) {
                let {
                    rule,
                    err,
                    model
                } = this;
                this.validateItem(type, rules[type], model);
            },
            async add() {
                let valid = this.validateForm();
                this.model.user_id = Utils.getUserId();
                this.model.status = this.model.status ? 1 : 0;
                if (valid) {
                    let res = await Api.post(url.merfloorAdd, this.model);
                    this.$router.push("/merchant")
                }
            },
            //  获取编辑信息
            async edit() {
                this.model.status = this.model.status ? 1 : 0;
                let res = await Api.post(url.merfloorEdit, this.model);
                this.$router.push("/merchant")
            },
        }
    };
</script>
<style lang="scss" scoped>
    @import "./style.scss";
</style>
