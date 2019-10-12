<template>
    <div class="course">
        <h3 class="title">学习vuex</h3>
        <div class="content">
            <video src="http://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
            <h3>简介</h3>
            <p class="content-p">一只熊在捕鱼，然而熊并不是真正的想吃鱼，而鱼也没有意识到被吃</p>
            <p class="note">
                <strong>注：</strong>分享即可获得免费的一个月vip权益
            </p>
        </div>
        <button class="share-btn" @click="share">分享</button>
    </div>
</template>

<script>
import { mapState, mapGetters} from "vuex";
import store from "../store"

export default {
    data() {
        return {};
    },
    methods: {
        share() {
            let c = confirm('课程分享 http://www.muke.com');
            if (c) {
                store.dispatch("getFreeVip").then(res => {
                    alert(res)
                })
            }
            else {
                alert('取消')
            }
        }
    }
}
</script>

<style lang="less">
.course {
    width: 100%;
    height: auto;
    padding: 16px;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    .title {
        text-align: center;
    }
    .content {
        text-align: left;
        video {
            width: 100%;
        }
        &-p {
            margin-bottom: 20px;
        }
        .note {
            color: #666;
        }
    }
    .share-btn {
        position: fixed;
        bottom: 20px;
        left: 5%;
        width: 90%;
        margin: 16px 0;
        border: none;
        line-height: 3;
        border-radius: 4px;
        font-size: 16px;
        color: #fff;
        background: #373737;
    }
}
</style>
