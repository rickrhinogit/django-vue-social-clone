import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/question/:slug",
    name: "question",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "question-time" */ "../views/Question.vue"),
    props: true,
  },
  {
    path: "/ask/:slug?",
    name: "question-editor",
    component: () =>
      import(
        /* webpackChunkName: "question-editor" */ "../views/QuestionEditor.vue"
      ),
    props: true,
  },
  {
    path: "/answer/:uuid?",
    name: "answer-editor",
    component: () =>
      import(
        /* webpackChunkName: "answer-editor" */ "../views/AnswerEditor.vue"
      ),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "page-not-found",
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ "../views/NotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
