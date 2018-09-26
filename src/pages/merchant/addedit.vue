<template>
    <div>
        <van-row class="merchant-add-container">
            <van-nav-bar :title="status==='add'?'新增商户':'编辑商户'" @click-left="back" left-text="返回" left-arrow />
            <van-row class="add-content">
                <Form ref="form" :rules="rules" :model="model" :label-width="160">
                    <FormItem prop="name" label="商户名称">
                        <ZdField v-model="model.name" placeholder="请输入商户名称" />
                    </FormItem>
                    <FormItem prop="name_sn" label="商户账号">
                        <ZdField v-model="model.name_sn" placeholder="请输入商户账号" />
                    </FormItem>
                    <FormItem prop="phone" label="手机号">
                        <ZdField v-model="model.phone" placeholder="请输入手机号" />
                    </FormItem>
                    <FormItem prop="amount" label="额度">
                        <ZdField v-model="model.amount" placeholder="请输入额度" />
                    </FormItem>
                    <FormItem prop="cdtime" label="商户冷却时间">
                        <ZdField v-model="model.cdtime" placeholder="请输入商户冷却时间" />
                    </FormItem>
                    <FormItem prop="daylimits" label="商户日限额">
                        <ZdField v-model="model.daylimits" placeholder="请输入商户日限额" />
                    </FormItem>
                    <FormItem prop="rate" label="费率">
                        <ZdField v-model="model.rate" placeholder="请输入费率" />
                    </FormItem>
                    <FormItem prop="weight" label="权重">
                        <ZdField v-model="model.weight" placeholder="请输入权重" />
                    </FormItem>
                    <FormItem prop="status" label="是否上线">
                        <van-switch v-model="model.status" />
                    </FormItem>
                </Form>
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
    import ZdField from '@/components/zdfield';
    const FormItem = Form.Item;
    export default {
        components: {
            Form,
            FormItem,
            ZdButton,
            ZdField
        },
        mixins: [Emitter],
        created() {
            this.initData();
        },
        destroyed() {
            Utils.storage.removeItem("MERCHANTINFO");
        },
        data: () => {
            return {
                status: "add",
                model: {
                    name: null,
                    name_sn: null,
                    phone: null,
                    amount: null,
                    cdtime: null,
                    daylimits: null,
                    rate: null,
                    weight: null,
                    status: true
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入商户名称'
                    }],
                    name_sn: [{
                        required: true,
                        message: '请输入商户账号',
                    }],
                    phone: [{
                        required: true,
                        message: '请输入手机号'
                    }],
                    amount: [{
                        required: true,
                        message: '请输入额度',
                    }],
                    cdtime: [{
                        required: true,
                        message: '请输入商户冷却时间'
                    }],
                    daylimits: [{
                        required: true,
                        message: '请输入商户日限额',
                    }],
                    rate: [{
                        required: true,
                        message: '请输入费率'
                    }],
                    weight: [{
                        required: true,
                        message: '请输入权重',
                    }],
                    status: [{
                        required: true,
                        message: '请选择是否上线',
                    }],
                },
            };
        },
        methods: {
            back() {
                this.$router.back();
            },
            //  初始化err
            initData() {
                this.status = this.$route.params.status;
                if (this.status === "edit") {
                    let info = Utils.storage.getItem("MERCHANTINFO");
                    Object.keys(this.model).forEach(key => {
                        this.model[key] = info[key];
                        this.model["id"] = info.id;
                        this.model["status"] = info.status == 1 ? true : false;
                    })
                }
            },
            async add() {
                this.$refs["form"].validate(async(valid) => {
                    if (valid) {
                        let status = this.model.status ? 1 : 0;
                        this.model.user_id = Utils.getUserId();
                        let res = await Api.post(url.merfloorAdd, { ...this.model,
                            status
                        });
                        this.$router.push("/merchant")
                    }
                })
            },
            //  获取编辑信息
            async edit() {
                this.$refs["form"].validate(async(valid) => {
                    if (valid) {
                        let status = this.model.status ? 1 : 0;
                        let res = await Api.post(url.merfloorEdit, { ...this.model,
                            status
                        });
                        this.$router.push("/merchant")
                    }
                })
            },
        }
    };
</script>
<style lang="scss" scoped>
    @import "./style.scss";
</style>
