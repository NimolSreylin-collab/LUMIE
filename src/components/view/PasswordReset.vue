<template>
    <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="translate-y-4 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-4 opacity-0"
    >
        <div
            v-if="showToast"
            class="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-[#0F3D2E] px-6 py-3 text-sm font-medium text-white shadow-lg"
        >
            We've sent you a password reset link. Please check your email.
        </div>
    </Transition>
    <div
        class="px-6 py-12 min-h-screen justify-center bg-[#F9FBF7] flex items-center"
    >
        <!-- Reset Password Card -->
        <div
            class="p-8 w-full max-w-md rounded-2xl border border-[#DCE6DC] bg-white shadow-lg relative"
        >

            <!-- Close Button -->
            <button
                type="button"
                @click="closeReset"
                class="top-4 h-9 w-9 justify-center rounded-full text-[#64756B] absolute right-4 flex items-center transition duration-300 hover:bg-[#F4F8F1] hover:text-[#0F3D2E]"
                aria-label="Close reset password"
            >
                <X
                    class="h-5 w-5"
                    :stroke-width="2"
                />
            </button>


            <!-- Icon -->
            <div class="mb-6 justify-center flex">
                <div
                    class="h-16 w-16 justify-center rounded-full bg-[#F4F8F1] flex items-center"
                >
                    <KeyRound
                        class="h-8 w-8 text-[#0F3D2E]"
                        :stroke-width="1.8"
                    />
                </div>
            </div>


            <!-- Header -->
            <div class="mb-8 text-center">
                <h2
                    class="text-2xl font-bold text-[#18352B]"
                >
                    Forgot Password?
                </h2>

                <p
                    class="mt-3 text-sm text-[#64756B] leading-6"
                >
                    Enter your email address and we'll send you
                    a link to reset your password.
                </p>
            </div>


            <!-- Form -->
            <form @submit.prevent="sendResetLink" class="space-y-6">

                <!-- Email -->
                <div>
                    <label
                        for="email"
                        class="mb-2 block text-sm font-medium
                        text-[#18352B]"
                    >
                        Email Address
                    </label>

                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        class="w-full rounded-xl
                        border border-[#DCE6DC]
                        bg-[#F9FBF7]
                        px-4 py-3
                        text-sm text-[#18352B]
                        outline-none
                        transition duration-300
                        placeholder:text-[#64756B]
                        focus:border-[#7A9E7E]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#A8C3A0]/30"
                    />
                </div>


                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full rounded-xl
                    bg-[#0F3D2E]
                    px-5 py-3
                    text-sm font-semibold
                    text-white
                    transition duration-300
                    hover:bg-[#174A3A]
                    hover:shadow-md
                    active:scale-[0.98]"
                >
                    Send Reset Link
                </button>

            </form>


            <!-- Back to Login -->
            <div class="mt-7 text-center">
                <router-link
                    @click="clickBack = !clickBack"
                    to="/login"
                    class="inline-flex items-center gap-2
                    text-sm font-medium
                    text-[#7A9E7E]
                    transition duration-300
                    hover:text-[#174A3A]"
                >
                    <ArrowLeft
                        class="h-4 w-4"
                        :stroke-width="2"
                    />

                    Back to Login
                </router-link>
            </div>

        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import {
    X,
    KeyRound,
    ArrowLeft
} from '@lucide/vue';


const router = useRouter();

const email = ref("");
const clickBack = ref(false);
const showToast = ref(false);

function sendResetLink(): void {
  showToast.value = true;
  email.value = "";
  setTimeout(() => {
    showToast.value = false;
    router.push("/login");
  }, 2000);
}

function closeReset(): void {
    router.back();
}
</script>


<style lang="scss" scoped>
</style>