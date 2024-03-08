import { createStore } from "vuex";
import journalModule from "./journal";

const store = createStore({
    modules: {
        journal: journalModule
    }
})

export default store