<template>
  <div class="training">
    <h1>Math training. Level {{ level + 1 }}</h1>
    <hr>
    <div class="progress">
      <div class="progress-bar" :style="progressStyles"></div>
    </div>
    <div class="box">
      <transition name="flip" mode="out-in">
      <app-start-screen
        v-if="state == 'start'"
        @onStart="onStart"
      />
      <app-question
        v-else-if="state == 'question'"
        @success="onQuestionSuccess"
        @error="onQuestionError"
        :settings="levels[level]"
        />
      <app-message
        v-else-if="state == 'message'"
        :type="message.type"
        :text="message.text"
        @onNext="onNext"
      />
      <app-result-screen
        v-else-if="state == 'result'"
        :stats="stats"
        @repeat="onStart"
        @nextLevel="onNextLevel"
      />
      <div v-else>Unknown state</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start',
      stats: {
        success: 0,
        errors: 0
      },
      message: {
        type: '',
        text: ''
      },
      questionMax: 5,
      level: 0,
      levels: [
        {
          from: 10,
          to: 40,
          range: 5,
          variants: 3
        },
        {
          from: 20,
          to: 60,
          range: 15,
          variants: 4
        },
        {
          from: 30,
          to: 70,
          range: 25,
          variants: 5
        }
      ]
    }
  },
  computed: {
    questDone() {
      return this.stats.success + this.stats.errors;
    },
    progressStyles() {
      return {
        width: (this.questDone / this.questionMax * 100) + '%'
      }
    }
  },
  methods: {
    onStart () {
      this.state = 'question';
      this.stats.success = 0;
      this.stats.errors = 0;
    },
    onQuestionSuccess() {
      this.state = 'message';
      this.message.text = 'Good Job!';
      this.message.type = 'success';
      this.stats.success++;
    },
    onQuestionError(msg) {
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'warning';
      this.stats.errors++;
    },
    onNext() {
      if (this.questDone < this.questionMax) {
        this.state = 'question';
      } else {
        this.state = 'result';
      }
    },
    onNextLevel() {
      this.level++;
      this.onStart();
    }
  }
};
</script>

<style scoped>
  .training {
    max-width: 700px;
    margin: 20px auto;
  }

  .progress-bar {
    transition: width 0.5s;
  }

  .box {
    margin: 10px 0;
  }

  .flip-enter {

  }

  .flip-enter-active {
    animation: flipInX 0.3s linear;
  }

  .flip-leave {

  }

  .flip-leave-active {
    animation: flipOutX 0.3s linear;
  }

  @keyframes flipInX {
    from {transform: rotateX(90deg);}
    to {transform: rotateX(0deg);}
  }

  @keyframes flipOutX {
    from {transform: rotateX(0deg);}
    to {transform: rotateX(90deg);}
  }
</style>
