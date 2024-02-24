import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            courseId: null
        };
    },
    mutations: {
        setCourseId(state, courseId) {
            state.courseId = courseId;
        }
    },
    actions: {
        setCourseId(context, courseId) {
            context.commit('setCourseId', courseId);
        }
    }
});

export default store;