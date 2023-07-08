<template>
    <!-- App -->
    <div class="flex bg-gray-50 font-lexend dark:bg-gray-900">
        

        <div class="flex-auto w-full overflow-auto h-screen transition-colors"
             id="body-scroll">
            <header @sidebarToggle="open" />
            <div class="container mx-auto w-4/6 py-5">
                <transition name="slide-up"
                            mode="out-in">
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
    <!-- End app -->
</template>

<script>
// Vue components
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// npm-js
import Scrollbar from 'smooth-scrollbar';

export default {
	name : 'App',

	components : {
		Header,
		Footer,
		Sidebar,
	},

	data() {
		return {
			sidebarDark : false,
			sidebar     : false,
		};
	},
	watch : {
		$route() {
			this.sidebar = false;
		},
	},
	mounted() {
		Scrollbar.init(document.querySelector('#body-scroll'));
	},
	methods : {
		open() {
			this.sidebar = true;
		},
		close() {
			this.sidebar = false;
		},
	},
};
</script>

<style>
  /*
  Enter and leave animations can use different
  durations and timing functions.
*/
  .slide-up-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-up-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
</style>
