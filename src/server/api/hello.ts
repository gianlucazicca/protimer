import {useHelloWorld} from "~/composables/useHelloWorld";
export default defineEventHandler((event) => {
    return {
        hello: useHelloWorld()
    }
})