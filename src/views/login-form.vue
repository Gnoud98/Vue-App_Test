<template>
    <section class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="login-panel bg-white text-left">
                    <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                        Login successfully. <small>waiting for redirect.</small>
                        <loader-component width="30"></loader-component>
                    </div>
                    <h1 class="display-3 font-weight-bold text-center">Login</h1>
                   
                    <br>
                    <form action="">
                        <div class="form-group">
                            <lable class="input-label">Email</lable>
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <lable class="input-label">Password</lable>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary w-25" id="login" @click.prevent="login" v-if="!isLoggingIn">Login</button>
                            <button class="btn btn-primary w-25" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import LoaderComponent from '../components/LoadingComponent'
import { setTimeout } from 'timers';
export default {
    name:'login',
    components: { LoaderComponent },
    data() {
        return {
            isLoggingIn: false,
            isAlertShow: false
        }
    },
    methods: {
        login() {
            this.isLoggingIn = true
            setTimeout(() => {
                this.isLoggingIn = false
                this.isAlertShow = true
                setTimeout(() => this.redirect(), 1000)
            }, 1000)
        },
        redirect() {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style lang="scss">
.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
    padding: 40px;
    margin: 20px 0;
    .alert {
        opacity: 0;
        position: absolute;
        width: 100%;
        top: 126px;
    left: 50%;
    transform: translateX(-50%);
        transition: all .5s;
        &.alert-primary {
            background-color: #35495e;
            color: #fff;
            font-size: 18px;
            border: none;
            width: 350px;
        }
        .widget {
            position: absolute;
            right: 5px;
            top: 0;
            margin: 10px;
        }
    }
}
</style>
