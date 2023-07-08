<template>
    <div class="dashboard p-4">
        <div class="mt-2 w-full">
            <div class="grid gap-2">
                <div>
                    <p class="uppercase text-xs text-gray-700 font-semibold">overview</p>
                    <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium mb-5">
                        Dashboard
                    </h1>
                    <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700">
                        <div class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700">
                            <span class="text-3xl p-2 text-gray-400">
                                <icon icon="ei:search" />
                            </span>
                            <input v-model="website_url"
                                   type="text"
                                   placeholder="Enter  URL"
                                   class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700">
                        </div>
                    </div>
                </div>
                <template v-if="website_url === 'wordpress.com'">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
                        <!-- card  -->
                        <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
                            <div class="p-2 max-w-sm">
                                <div class="bg-orange-200 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
                                    <span class="">
                                        <img src="/assets/img/stream.svg"
                                             alt="">
                                    </span>
                                </div>
                            </div>
                
                            <div class="block p-2 w-full">
                                <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
                                    {{ api_response.name }}
                                </p>
                                <h2 class="font-normal text-gray-400 text-md mt-1">{{ api_response.probability }} %</h2>
                            </div>
                        </div>
                        <!-- end card -->
                        <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
                            <div class="p-2 max-w-sm">
                                <div class="bg-green-200 rounded-full w-14 h-14 text-lg p-3 text-green-600 mx-auto">
                                    <span class="">
                                        <img src="/assets/img/lock.svg"
                                             alt="">
                                    </span>
                                </div>
                            </div>
                
                            <div class="block p-2 w-full">
                                <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
                                    Safety Score
                                </p>
                                <h2 class="font-normal text-gray-400 text-md mt-1">{{ api_response.safetyScore.value }}</h2>
                            </div>
                
                        </div>
                        <!-- end card -->
                        <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
                            <div class="p-2 max-w-sm">
                                <div class="bg-purple-200 rounded-full w-14 h-14 text-lg p-3 text-purple-600 mx-auto">
                                    <span class="">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             aria-hidden="true"
                                             role="img"
                                             width="30px"
                                             height="30px"
                                             preserveAspectRatio="xMidYMid meet"
                                             viewBox="0 0 16 16">
                                            <g fill="currentColor">
                                                <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />
                                                <path d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="block p-2 w-full">
                                <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
                                    Total Competitors
                                </p>
                                <h2 class="font-normal text-gray-400 text-md mt-1">{{ api_response.totalCompetitors }}</h2>
                            </div>
                        </div>
                        <!-- end card -->
                        <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 flex">
                            <div class="p-2 max-w-sm">
                                <div class="bg-sky-700 shadow-xl rounded-full w-14 h-14 text-lg p-3 text-red-600 mx-auto">
                                    <span class="">
                                        <img :src="technologies[8].icon">
                                    </span>
                                </div>
                            </div>
                            <div class="block p-2 w-full">
                                <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
                                    Technologies
                                </p>
                                <h2 class="font-normal text-gray-400 text-md mt-1">{{ technologies[8].name }}</h2>
                            </div>
                        </div>
                        <!-- WORDPRESS CARD -->
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div class="bg-white dark:bg-gray-800 p-5 rounded-md box-border border dark:border-gray-700">
                            <div class="p-5 flex justify-between">
                                <div>
                                    <h2 class="font-medium text-sm text-gray-800 dark:text-gray-200">
                                        Classification
                                    </h2>
                                    <h1 class="font-semibold text-4xl text-gray-800 dark:text-gray-200">
                                        {{ api_response.probability }}% {{ api_response.categories }}
                                    </h1>
                    
                                    <p class="text-gray-400 font-lexend font-normal">
                                        your classification chart by category
                                    </p>
                                </div>
                    
                            </div>
                            <apexchart width="100%"
                                       height="260"
                                       type="area"
                                       :options="optionsArea"
                                       :series="seriesArea"
                                       :sparkline="{
                                           enabled: true,
                                       }" />
                            <br>
                            <hr>
                            <div class="wrapper-button p-5 flex justify-between mt-3">
                                <select name=""
                                        id=""
                                        class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
                                    <option value="">Classification by categories</option>
                                </select>
                                <button class="uppercase border-b border-red-600 text-red-600">
                                    Classification Report
                                </button>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-gray-800 p-5 border dark:border-gray-700 rounded-md">
                            <div class="">
                                <h2 class="text-lg font-semibold dark:text-gray-200">
                                    Products menu
                                </h2>
                                <p class="text-gray-400">This is the list of the products that the website is selling.</p>
                            </div>
                            <perfect-scrollbar class="divide-y h-96 mt-5 dark:divide-gray-700">
                                <div v-for="category in categories"
                                     :key="category.id"
                                     class="p-3 w-full">
                                    <div class="flex gap-5">
                                        <div>
                                            <img :src="category.icon">
                                        </div>
                                        <div class="mt-1">
                                            <h2 class="dark:text-gray-200">{{ category.name }}</h2>
                                            <p class="text-sm dark:text-gray-500 text-gray-400">
                                                Percentage %
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="p-3 w-full">
                                    <div class="flex gap-5">
                                        <div>
                                            <img src="@/assets/img/business.svg"
                                                 alt="">
                                        </div>
                                        <div class="mt-1">
                                            <h2 class="dark:text-gray-200">Business and Finance</h2>
                                            <p class="text-sm dark:text-gray-500 text-gray-400">
                                                Percentage %
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 w-full">
                                    <div class="flex gap-5">
                                        <div>
                                            <img class="w-14 rounded-md"
                                                 src="../assets/img/user3.png"
                                                 alt="">
                                        </div>
                                        <div class="mt-1">
                                            <h2 class="dark:text-gray-200">Blog</h2>
                                            <p class="text-sm dark:text-gray-500 text-gray-400">
                                                Percentage %
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 w-full">
                                    <div class="flex gap-5">
                                        <div>
                                            <img class="w-14 rounded-md"
                                                 src="../assets/img/user4.png"
                                                 alt="">
                                        </div>
                                        <div class="mt-1">
                                            <h2 class="dark:text-gray-200">Science</h2>
                                            <p class="text-sm dark:text-gray-500 text-gray-400">
                                                Percentage %
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 w-full">
                                    <div class="flex gap-5">
                                        <div>
                                            <img class="w-14 rounded-md"
                                                 src="../assets/img/user5.png"
                                                 alt="">
                                        </div>
                                        <div class="mt-1">
                                            <h2 class="dark:text-gray-200">Travel</h2>
                                            <p class="text-sm dark:text-gray-500 text-gray-400">
                                                Percentage %
                                            </p>
                                        </div>
                                    </div>
                                </div> -->
                            </perfect-scrollbar>
                        </div>
                        <div class="bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
                            <div class="head p-5">
                                <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                                    1,780
                                </h2>
                                <p class="text-gray-400 font-lexend font-normal">
                                    User feedbacks
                                </p>
                                <span class="float-right">
                                    <h2 class="text-green-500 -mt-12 flex">
                                        <span class="mr-2"> 27.9% </span><span>
                                            <icon icon="akar-icons:arrow-up" />
                                        </span>
                                    </h2>
                                </span>
                            </div>
                            <div class="wrapper-chart mt-5 pr-2 pl-2">
                                <apexchart width="100%"
                                           height="380"
                                           type="bar"
                                           :options="optionsBar"
                                           :series="seriesBar" />
                                <br>
                                <hr>
                                <div class="footer p-5">
                                    <div class="wrapper-button flex justify-between mt-3">
                                        <select name=""
                                                id=""
                                                class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
                                            <option value="">Last 7 days</option>
                                        </select>
                                        <button class="uppercase border-b border-red-600 text-red-600">
                                            Product Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
                            <div class="head p-5">
                                <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                                    5,355
                                </h2>
                                <p class="text-gray-400 font-lexend font-normal">Transactions this week</p>
                    
                                <span class="float-right">
                                    <h2 class="text-green-500 -mt-12 flex">
                                        <span class="mr-2"> 47.9% </span><span>
                                            <icon icon="akar-icons:arrow-up" />
                                        </span>
                                    </h2>
                                </span>
                            </div>
                            <div class="wrapper-chart mt-5">
                                <apexchart width="100%"
                                           height="380"
                                           type="area"
                                           :options="optionsTransactions"
                                           :series="seriesTransactions" />
                                <br>
                                <hr>
                                <div class="footer p-5">
                                    <div class="wrapper-button flex justify-between mt-3">
                                        <select name=""
                                                id=""
                                                class="dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 border max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
                                            <option value="">Last 7 days</option>
                                        </select>
                                        <button class="uppercase border-b border-red-600 text-red-600">
                                            Transaction Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border border dark:border-gray-700">
                            <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
                                Status
                            </h2>
                            <p class="text-gray-400 font-lexend font-normal">
                                This is a list of the activity log.
                            </p>
                            <div class="wrapping-table mt-10">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col"
                                                class="uppercase px-6 py-3">
                                                Site (http; http-https; null)
                                            </th>
                                            <th scope="col"
                                                class="uppercase px-6 py-3">
                                                Technologies
                                            </th>
                                            <th />
                                            <th scope="col"
                                                class="uppercase px-6 py-3">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                                            v-for="items in tableTransaction"
                                            :key="items.transaction">
                                            <td class="px-6 py-4">
                                                {{ items.transaction }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ items.datetime }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ items.amount }}
                                            </td>
                                            <td class="px-6 py-4">
                                                <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                                                      v-if="items.statusTransaction == 'Working'">
                                                    {{ items.statusTransaction }}
                                                </span>
                                                <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                                                      v-else-if="items.statusTransaction == 'Inactive'">
                                                    {{ items.statusTransaction }}
                                                </span>
                                                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                                                      v-else>
                                                    {{ items.statusTransaction }}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="wrapper-button flex justify-between mt-3">
                                <select name=""
                                        id=""
                                        class="dark:bg-gray-800 dark:hover:bg-gray-700 border dark:border-gray-700 max-w-lg px-4 py-3 block rounded-md text-gray-500 dark:text-gray-400">
                                    <option value="">Last 7 years</option>
                                </select>
                                <button class="uppercase border-b border-red-600 text-red-600">
                                    Transaction Report
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <!-- card  -->
                    <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 grid gap-5">
                        <div class="flex justify-center">
                            <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-14 h-14 text-lg p-3 text-orange-600 mx-auto">
                                <span class="">
                                    <img src="/assets/img/winel.svg"
                                         alt="">
                                </span>
                            </div>
                        </div>
                        <p class="font-semibold text-gray-900 dark:text-gray-200 text-center text-xl">
                            No result were found
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from '@iconify/vue';

export default {
	name       : 'Dashboard',
	components : {
		Icon,
	},
	data() {
		return {
			technologies : [
				{
					id   : 1,
					name : 'Angular',
					type : 'JavaScript',
					icon : '/assets/img/angular.svg'
				},
				{id   : 2,
					name : 'Apache',
					type : 'Web Server',
					icon : '/assets/img/apache.svg'
				},
				{id   : 3,
					name : 'CSS',
					type : 'Styling Language',
					icon : '/assets/img/css.svg'
				},
				{id   : 4,
					name : 'Django',
					type : 'Python Web Framework',
					icon : '/assets/img/django.svg'
				},
				{id   : 5,
					name : 'HTML',
					    type : 'Markup Language',
					icon : '/assets/img/html.svg'
				},
				{id   : 6,
					name : 'JavaScript',
					type : 'Programming Language',
					icon : '/assets/img/javascript.svg'
				},
				{id   : 7,
					name : 'MongoDB',
					type : 'NoSQL Database',
					icon : '/assets/img/mongodb.svg'
				},
				{id   : 8,
					name : 'MySQL',
					type : 'Relational Database',
					icon : '/assets/img/mysql.svg'
				},
				{id   : 9,
					name : 'Node.js',
					type : 'JavaScript Runtime',
					icon : '/assets/img/node.svg'
				},
				{id   : 10,
					name : 'Python',
					type : 'Programming Language',
					icon : '/assets/img/python.svg'
				},
				{id   : 11,
					name : 'React',
					type : 'JavaScript Library',
					icon : '/assets/img/react.svg'
				},
				{id   : 12,
					name : 'Ruby',
					type : 'Programming Language',
					icon : '/assets/img/ruby.svg'
				},
				{id   : 13,
					name : 'Shopify',
					type : 'E-commerce Platform',
					icon : '/assets/img/shopify.svg'
				},
				{id   : 14,
					name : 'Stream',
					type : 'Activity Feed API',
					icon : '/assets/img/stream.svg'
				},
				{ id   : 15,
					name : 'WordPress',
					type : 'Content Management System',
					icon : '/assets/img/wordpress.svg'
				}

			],
			website_url  : 'wordpress.com',
			api_response : {
				probability : 0.5 ,
				name        : 'Category Accuracy',
			
				security : {
					isSecure : true,
					type     : 'SSL',
				},
                
            
				safetyScore : {
					min     : 0,
					maximum : 100,
					value   : 58,
				},
				totalCustomers   : 68312,
				totalCompetitors : 5455598,
			},
			// for more guide apexschart.js
			// https://apexcharts.com/docs/chart-types/line-chart/

			// chart data area
			optionsArea : {
				xaxis : {
					categories : [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
				},
				fontFamily : 'Segoe UI, sans-serif',
				stroke     : {
					curve : 'straight',
				},
				chart : {
					toolbar : {
						show : true,
					},
					zoom : {
						enabled : false,
					},
					sparkline : {
						enabled : true,
					},
				},
				markers : {
					size : 0,
				},
				yaxis : {
					show : false,
				},
				fill : {
					type     : 'gradient',
					gradient : {
						shadeIntensity : 0,
						opacityFrom    : 0.2,
						opacityTo      : 0.5,
						stops          : [0, 90, 100],
					},
				},
			},

			chart : {
				fontFamily : 'lexend, sans-serif',
			},

			seriesArea : [
				{
					name : 'Revenue',
					data : [30, 40, 45, 50, 49, 60, 70, 91],
				},
				{
					name : 'Revenue (Previous period)',
					data : [20, 34, 45, 55, 79, 87, 90, 98],
				},
			],
			categories : [
				{
					id   : 1,
					name : 'Arts & Entertaiment',
					icon : '/assets/img/enternene.svg'
				},
				{
					id   : 2,
					name : 'Business website',
					icon : '/assets/img/business.svg'
				},
				{
					id   : 3,
					name : 'Event website',
					icon : '/assets/img/calendar-month-rounded.svg'
				},
				{
					id   : 4,
					name : 'Phishing website',
					icon : '/assets/img/phishing.svg'
				},
				{
					id   : 5,
					name : 'Motor Home Dealers'
				},
				{
					id   : 742,
					name : 'Veterinary services'
				},
				{
					id   : 743,
					name : 'Wine producers'
				},
				{
					id   : 744,
					name : 'Champagne producers'
				},
				{
					id   : 780,
					name : 'Landscaping and horticultural services'
				},
				{
					id   : 1711,
					name : 'Heating, plumbing and air-conditioning contractors'
				},
				{
					id   : 1731,
					name : 'Electrical contractors'
				},
				{
					id   : 1740,
					name : 'Masonry, stonework, tile setting, plastering and insulation contractors'
				},
				{
					id   : 1750,
					name : 'Carpentry contractors'
				},
				{
					id   : 1761,
					name : 'Roofing, siding and sheet metal work contractors'
				},
				{
					id   : 1771,
					name : 'Concrete work contractors'
				},
				{
					id   : 1799,
					name : 'Special trade contractors - not elsewhere classified'
				},
				{
					id   : 2741,
					name : 'Miscellaneous publishing and printing services'
				},
				{
					id   : 2791,
					name : 'Typesetting, platemaking and related services'
				},
				{
					id   : 2842,
					name : 'Speciality cleaning, polishing and sanitation preparations'
				},
				{
					id   : 4011,
					name : 'Railroads'
				},
				{
					id   : 4111,
					name : 'Local and suburban commuter passenger transportation, including ferries'
				},
				{
					id   : 4112,
					name : 'Passenger railways'
				},
				{
					id   : 4119,
					name : 'Ambulance services'
				},
				{
					id   : 4121,
					name : 'Taxi-cabs and limousines'
				},
				{
					id   : 4131,
					name : 'Bus lines'
				},
				{
					id   : 4214,
					name : 'Motor freight carriers and trucking - local and long distance, moving and storage companies and local delivery'
				},
				{
					id   : 4215,
					name : 'Courier services - air and ground and freight forwarders'
				},
				{
					id   : 4225,
					name : 'Public warehousing and storage - farm products, refrigerated goods and household goods'
				},
				{
					id   : 4411,
					name : 'Steamships and cruise lines'
				},
				{
					id   : 4457,
					name : 'Boat rentals and leasing'
				},
				{
					id   : 4468,
					name : 'Marinas, marine service and supplies'
				},
				{
					id   : 4511,
					name : 'Airlines and air carriers'
				},
				{
					id   : 4582,
					name : 'Airports, flying fields and airport terminals'
				},
				{
					id   : 4722,
					name : 'Travel agencies and tour operators'
				},
				{
					id   : 4784,
					name : 'Tolls and bridge fees'
				},
				{
					id   : 4789,
					name : 'Transportation services'
				},
				{
					id   : 4812,
					name : 'Telecommunication equipment and telephone sales'
				},
				{
					id   : 4814,
					name : 'Telecommunication services'
				},
				{
					id   : 4815,
					name : 'Monthly summary telephone charges'
				},
				{
					id   : 4816,
					name : 'Computer network information services'
				},
				{
					id   : 4821,
					name : 'Telegraph services'
				},
				{
					id   : 4899,
					name : 'Cable and other pay television services'
				},
				{
					id   : 4900,
					name : 'Utilities - electric, gas, water and sanitary'
				},
				{
					id   : 5013,
					name : 'Motor vehicle supplies and new parts'
				},
				{
					id   : 5021,
					name : 'Office and commercial furniture'
				},
				{
					id   : 5039,
					name : 'Construction materials - not elsewhere classified'
				},
				{
					id   : 5044,
					name : 'Office, photographic, photocopy and microfilm equipment'
				},
				{
					id   : 5045,
					name : 'Computers, computer peripheral equipment - not elsewhere classified'
				},
				{
					id   : 5046,
					name : 'Commercial equipment - not elsewhere classified'
				},
				{
					id   : 5047,
					name : 'Dental laboratory medical ophthalmic hospital equipment and supplies'
				},
				{
					id   : 5051,
					name : 'Metal service centres and offices'
				},
				{
					id   : 5065,
					name : 'Electrical parts and equipment'
				},
				{
					id   : 5072,
					name : 'Hardware equipment and supplies'
				},
				{
					id   : 5074,
					name : 'Plumbing and heating equipment and supplies'
				},
				{
					id   : 5085,
					name : 'Industrial supplies - not elsewhere classified'
				},
				{
					id   : 5094,
					name : 'Precious stones and metals, watches and jewellery'
				},
				{
					id   : 5099,
					name : 'Durable goods - not elsewhere classified'
				},
				{
					id   : 5111,
					name : 'Stationery, office supplies and printing and writing paper'
				},
				{
					id   : 5122,
					name : 'Drugs, drug proprietors'
				},
				{
					id   : 5131,
					name : 'Piece goods, notions and other dry goods'
				},
				{
					id   : 5137,
					name : 'Men’s, women’s and children’s uniforms and commercial clothing'
				},
				{
					id   : 5139,
					name : 'Commercial footwear'
				},
				{
					id   : 5169,
					name : 'Chemicals and allied products - not elsewhere classified'
				},
				{
					id   : 5192,
					name : 'Books, periodicals and newspapers'
				},
				{
					id   : 5193,
					name : 'Florists’ supplies, nursery stock and flowers'
				},
				{
					id   : 5198,
					name : 'Paints, varnishes and supplies'
				},
				{
					id   : 5199,
					name : 'Non-durable goods - not elsewhere classified'
				},
				{
					id   : 5200,
					name : 'Home supply warehouse outlets'
				},
				{
					id   : 5211,
					name : 'Lumber and building materials outlets'
				},
				{
					id   : 5231,
					name : 'Glass, paint and wallpaper shops'
				},
				{
					id   : 5251,
					name : 'Hardware shops'
				},
				{
					id   : 5261,
					name : 'Lawn and garden supplies outlets, including nurseries'
				},
				{
					id   : 5271,
					name : 'Mobile home dealers'
				},
				{
					id   : 5300,
					name : 'Wholesale clubs'
				},
				{
					id   : 5309,
					name : 'Duty-free shops'
				},
				{
					id   : 5310,
					name : 'Discount shops'
				},
				{
					id   : 5311,
					name : 'Department stores'
				},
				{
					id   : 5331,
					name : 'Variety stores'
				},
				{
					id   : 5399,
					name : 'Miscellaneous general merchandise'
				},
				{
					id   : 5411,
					name : 'Groceries and supermarkets'
				},
				{
					id   : 5422,
					name : 'Freezer and locker meat provisioners'
				},
				{
					id   : 5441,
					name : 'Candy, nut and confectionery shops'
				},
				{
					id   : 5451,
					name : 'Dairies'
				},
				{
					id   : 5462,
					name : 'Bakeries'
				},
				{
					id   : 5499,
					name : 'Miscellaneous food shops - convenience and specialty retail outlets'
				},
				{
					id   : 5511,
					name : 'Car and truck dealers (new and used) sales, services, repairs, parts and leasing'
				},
				{
					id   : 5521,
					name : 'Car and truck dealers (used only) sales, service, repairs, parts and leasing'
				},
				{
					id   : 5531,
					name : 'Auto and home supply outlets'
				},
				{
					id   : 5532,
					name : 'Automotive tyre outlets'
				},
				{
					id   : 5533,
					name : 'Automotive parts and accessories outlets'
				},
				{
					id   : 5541,
					name : 'Service stations (with or without ancillary services)'
				},
				{
					id   : 5542,
					name : 'Automated fuel dispensers'
				},
				{
					id   : 5551,
					name : 'Boat dealers'
				},
				{
					id   : 5561,
					name : 'Camper, recreational and utility trailer dealers'
				},
				{
					id   : 5571,
					name : 'Motorcycle shops and dealers'
				},
				{
					id   : 5592,
					name : 'Motor home dealers'
				},
				{
					id   : 5598,
					name : 'Snowmobile dealers'
				},
				{
					id   : 5599,
					name : 'Miscellaneous automotive, aircraft and farm equipment dealers - not elsewhere classified'
				},
				{
					id   : 5611,
					name : 'Men’s and boys’ clothing and accessory shops'
				},
				{
					id   : 5621,
					name : 'Women’s ready-to-wear shops'
				},
				{
					id   : 5631,
					name : 'Women’s accessory and specialty shops'
				},
				{
					id   : 5641,
					name : 'Children’s and infants’ wear shops'
				},
				{
					id   : 5651,
					name : 'Family clothing shops'
				},
				{
					id   : 5072,
					name : 'Hardware equipment and supplies'
				},
				{
					id   : 5074,
					name : 'Plumbing and heating equipment and supplies'
				},
				{
					id   : 5085,
					name : 'Industrial supplies - not elsewhere classified'
				},
				{
					id   : 5094,
					name : 'Precious stones and metals, watches and jewellery'
				},
				{
					id   : 5099,
					name : 'Durable goods - not elsewhere classified'
				},
				{
					id   : 5111,
					name : 'Stationery, office supplies and printing and writing paper'
				},
				{
					id   : 5122,
					name : 'Drugs, drug proprietors'
				},
				{
					id   : 5131,
					name : 'Piece goods, notions and other dry goods'
				},
				{
					id   : 5137,
					name : 'Men’s, women’s and children’s uniforms and commercial clothing'
				},
				{
					id   : 5139,
					name : 'Commercial footwear'
				},
				{
					id   : 5169,
					name : 'Chemicals and allied products - not elsewhere classified'
				},
				{
					id   : 5192,
					name : 'Books, periodicals and newspapers'
				},
				{
					id   : 5193,
					name : 'Florists’ supplies, nursery stock and flowers'
				},
				{
					id   : 5198,
					name : 'Paints, varnishes and supplies'
				},
				{
					id   : 5199,
					name : 'Non-durable goods - not elsewhere classified'
				},
				{
					id   : 5200,
					name : 'Home supply warehouse outlets'
				},
				{
					id   : 5211,
					name : 'Lumber and building materials outlets'
				},
				{
					id   : 5231,
					name : 'Glass, paint and wallpaper shops'
				},
				{
					id   : 5251,
					name : 'Hardware shops'
				},
				{
					id   : 5261,
					name : 'Lawn and garden supplies outlets, including nurseries'
				},
				{
					id   : 5271,
					name : 'Mobile home dealers'
				},
				{
					id   : 5300,
					name : 'Wholesale clubs'
				},
				{
					id   : 5309,
					name : 'Duty-free shops'
				},
				{
					id   : 5310,
					name : 'Discount shops'
				},
				{
					id   : 5311,
					name : 'Department stores'
				},
				{
					id   : 5331,
					name : 'Variety stores'
				},
				{
					id   : 5399,
					name : 'Miscellaneous general merchandise'
				},
				{
					id   : 5411,
					name : 'Groceries and supermarkets'
				},
				{
					id   : 5422,
					name : 'Freezer and locker meat provisioners'
				},
				{
					id   : 5441,
					name : 'Candy, nut and confectionery shops'
				},
				{
					id   : 5451,
					name : 'Dairies'
				},
				{
					id   : 5462,
					name : 'Bakeries'
				},
				{
					id   : 5499,
					name : 'Miscellaneous food shops - convenience and specialty retail outlets'
				},
				{
					id   : 5511,
					name : 'Car and truck dealers (new and used) sales, services, repairs, parts and leasing'
				},
				{
					id   : 5521,
					name : 'Car and truck dealers (used only) sales, service, repairs, parts and leasing'
				},
				{
					id   : 5531,
					name : 'Auto and home supply outlets'
				},
				{
					id   : 5532,
					name : 'Automotive tyre outlets'
				},
				{
					id   : 5533,
					name : 'Automotive parts and accessories outlets'
				},
				{
					id   : 5541,
					name : 'Service stations (with or without ancillary services)'
				},
				{
					id   : 5542,
					name : 'Automated fuel dispensers'
				},
				{
					id   : 5551,
					name : 'Boat dealers'
				},
				{
					id   : 5561,
					name : 'Camper, recreational and utility trailer dealers'
				},
				{
					id   : 5571,
					name : 'Motorcycle shops and dealers'
				},
				{
					id   : 5592,
					name : 'Motor home dealers'
				},
				{
					id   : 5598,
					name : 'Snowmobile dealers'
				},
				{
					id   : 5599,
					name : 'Miscellaneous automotive, aircraft and farm equipment dealers - not elsewhere classified'
				},
				{
					id   : 5611,
					name : 'Men’s and boys’ clothing and accessory shops'
				},
				{
					id   : 5621,
					name : 'Women’s ready-to-wear shops'
				},
				{
					id   : 5631,
					name : 'Women’s accessory and specialty shops'
				},
				{
					id   : 5641,
					name : 'Children’s and infants’ wear shops'
				},
				{
					id   : 5651,
					name : 'Family clothing shops'
				},
				{
					id   : 5655,
					name : 'Sports and riding apparel shops'
				},
				{
					id   : 5661,
					name : 'Shoe shops'
				},
				{
					id   : 5681,
					name : 'Furriers and fur shops'
				},
				{
					id   : 5691,
					name : 'Men’s and women’s clothing shops'
				},
				{
					id   : 5697,
					name : 'Tailors, seamstresses, mending and alterations'
				},
				{
					id   : 5698,
					name : 'Wig and toupee shops'
				},
				{
					id   : 5699,
					name : 'Miscellaneous apparel and accessory shops'
				},
				{
					id   : 5712,
					name : 'Furniture, home furnishings and equipment shops and manufacturers, except appliances'
				},
				{
					id   : 5713,
					name : 'Floor covering services'
				},
				{
					id   : 5714,
					name : 'Drapery, window covering and upholstery shops'
				},
				{
					id   : 5715,
					name : 'Alcoholic beverage wholesalers'
				},
				{
					id   : 5718,
					name : 'Fireplaces, fireplace screens and accessories shops'
				},
				{
					id   : 5719,
					name : 'Miscellaneous home furnishing specialty shops'
				},
				{
					id   : 5722,
					name : 'Household appliance shops'
				},
				{
					id   : 5732,
					name : 'Electronics shops'
				},
				{
					id   : 5733,
					name : 'Music shops - musical instruments, pianos and sheet music'
				},
				{
					id   : 5734,
					name : 'Computer software outlets'
				},
				{
					id   : 5735,
					name : 'Record shops'
				},
				{
					id   : 5811,
					name : 'Caterers'
				},
				{
					id   : 5812,
					name : 'Eating places and restaurants'
				},
				{
					id   : 5813,
					name : 'Drinking places (alcoholic beverages) - bars, taverns, night-clubs, cocktail lounges and discothèques'
				},
				{
					id   : 5814,
					name : 'Fast food restaurants'
				},
				{
					id   : 5815,
					name : 'Digital Goods-Media, Books, Movies, Music'
				},
				{
					id   : 5816,
					name : 'Digital Goods-Games'
				},
				{
					id   : 5817,
					name : 'Furriers and fur shopsDigital Goods-Software Applications (excluding games)'
				},
				{
					id   : 5818,
					name : 'Digital Goods-Multi-Category'
				},
				{
					id   : 5912,
					name : 'Drug stores and pharmacies'
				},
				{
					id   : 5921,
					name : 'Package shops - beer, wine and liquor'
				},
				{
					id   : 5931,
					name : 'Used merchandise and second-hand shops'
				},
				{
					id   : 5935,
					name : 'Wrecking and salvage yards'
				},
				{
					id   : 5937,
					name : 'Antique reproduction shops'
				},
				{
					id   : 5940,
					name : 'Bicycle shops - sales and service'
				},
				{
					id   : 5941,
					name : 'Sporting goods shops'
				},
				{
					id   : 5942,
					name : 'Bookshops'
				},
				{
					id   : 5943,
					name : 'Stationery, office and school supply shops'
				},
				{
					id   : 5944,
					name : 'Jewellery, watch, clock and silverware shops'
				},
				{
					id   : 5945,
					name : 'Hobby, toy and game shops'
				},
				{
					id   : 5946,
					name : 'Camera and photographic supply shops'
				},
				{
					id   : 5947,
					name : 'Gift, card, novelty and souvenir shops'
				},
				{
					id   : 5948,
					name : 'Luggage and leather goods shops'
				},
				{
					id   : 5949,
					name : 'Sewing, needlework, fabric and piece goods shops'
				},
				{
					id   : 5950,
					name : 'Glassware and crystal shops'
				},
				{
					id   : 5962,
					name : 'Telemarketing - travel-related arrangement services'
				},
				{
					id   : 5963,
					name : 'Door-to-door sales'
				},
				{
					id   : 5964,
					name : 'Direct marketing - catalogue merchants'
				},
				{
					id   : 5965,
					name : 'Direct marketing - combination catalogue and retail merchants'
				},
				{
					id   : 5966,
					name : 'Direct marketing - outbound telemarketing merchants'
				},
				{
					id   : 5967,
					name : 'Direct marketing - inbound telemarketing merchants'
				},
				{
					id   : 5968,
					name : 'Direct marketing - continuity subscription merchants'
				},
				{
					id   : 5969,
					name : 'Direct marketing direct marketers - not elsewhere classified'
				},
				{
					id   : 5970,
					name : 'Artist supply and craft shops'
				},
				{
					id   : 5971,
					name : 'Art dealers and galleries'
				},
				{
					id   : 5972,
					name : 'Stamp and coin shops'
				},
				{
					id   : 5973,
					name : 'Religious goods and shops'
				},
				{
					id   : 5975,
					name : 'Hearing aids - sales, service and supplies'
				},
				{
					id   : 5976,
					name : 'Orthopaedic goods and prosthetic devices'
				},
				{
					id   : 5977,
					name : 'Cosmetic shops'
				},
				{
					id   : 5978,
					name : 'Typewriter outlets - sales, service and rentals'
				},
				{
					id   : 5983,
					name : 'Fuel dealers - fuel oil, wood, coal and liquefied petroleum'
				},
				{
					id   : 5992,
					name : 'Florists'
				},
				{
					id   : 5993,
					name : 'Cigar shops and stands'
				},
				{
					id   : 5994,
					name : 'Newsagents and news-stands'
				},
				{
					id   : 5995,
					name : 'Pet shops, pet food and supplies'
				},
				{
					id   : 5996,
					name : 'Swimming pools - sales, supplies and services'
				},
				{
					id   : 5997,
					name : 'Electric razor shops - sales and service'
				},
				{
					id   : 5998,
					name : 'Tent and awning shops'
				},
				{
					id   : 5999,
					name : 'Miscellaneous and specialty retail outlets'
				},
				{
					id   : 7011,
					name : 'Lodging - hotels, motels and resorts'
				},
				{
					id   : 7032,
					name : 'Sporting and recreational camps'
				},
				{
					id   : 7033,
					name : 'Trailer parks and camp-sites'
				},
				{
					id   : 7210,
					name : 'Laundry, cleaning and garment services'
				},
				{
					id   : 7211,
					name : 'Laundry services - family and commercial'
				},
				{
					id   : 7216,
					name : 'Dry cleaners'
				},
				{
					id   : 7217,
					name : 'Carpet and upholstery cleaning'
				},
				{
					id   : 7221,
					name : 'Photographic studios'
				},
				{
					id   : 7230,
					name : 'Beauty and barber shops'
				},
				{
					id   : 7251,
					name : 'Shoe repair shops, shoe shine parlours and hat cleaning shops'
				},
				{
					id   : 7261,
					name : 'Funeral services and crematoriums'
				},
				{
					id   : 7273,
					name : 'Dating and escort services'
				},
				{
					id   : 7278,
					name : 'Buying and shopping services and clubs'
				},
				{
					id   : 7295,
					name : 'Babysitting and housekeeping services'
				},
				{
					id   : 7296,
					name : 'Clothing rentals - costumes, uniforms and formal wear'
				},
				{
					id   : 7297,
					name : 'Massage parlours'
				},
				{
					id   : 7298,
					name : 'Health and beauty spas'
				},
				{
					id   : 7299,
					name : 'Miscellaneous personal services - not elsewhere classified'
				},
				{
					id   : 7311,
					name : 'Advertising services'
				},
				{
					id   : 7333,
					name : 'Commercial photography, art and graphics'
				},
				{
					id   : 7338,
					name : 'Quick copy, reproduction and blueprinting services'
				},
				{
					id   : 7339,
					name : 'Stenographic and secretarial support services'
				},
				{
					id   : 7342,
					name : 'Exterminating and disinfecting services'
				},
				{
					id   : 7349,
					name : 'Cleaning, maintenance and janitorial services'
				},
				{
					id   : 7361,
					name : 'Employment agencies and temporary help services'
				},
				{
					id   : 7372,
					name : 'Computer programming, data processing and integrated systems design services'
				},
				{
					id   : 7375,
					name : 'Information retrieval services'
				},
				{
					id   : 7379,
					name : 'Computer maintenance and repair services - not elsewhere classified'
				},
				{
					id   : 7392,
					name : 'Management, consulting and public relations services'
				},
				{
					id   : 7393,
					name : 'Detective agencies, protective agencies and security services, including armoured cars and guard dogs'
				},
				{
					id   : 7394,
					name : 'Equipment, tool, furniture and appliance rentals and leasing'
				},
				{
					id   : 7395,
					name : 'Photofinishing laboratories and photo developing'
				},
				{
					id   : 7399,
					name : 'Business services - not elsewhere classified'
				},
				{
					id   : 7511,
					name : 'Reserved for national use'
				},
				{
					id   : 7512,
					name : 'Automobile rentals'
				},
				{
					id   : 7513,
					name : 'Truck and utility trailer rentals'
				},
				{
					id   : 7519,
					name : 'Motor home and recreational vehicle rentals'
				},
				{
					id   : 7523,
					name : 'Parking lots and garages'
				},
				{
					id   : 7531,
					name : 'Automotive body repair shops'
				},
				{
					id   : 7534,
					name : 'Tyre retreading and repair shops'
				},
				{
					id   : 7535,
					name : 'Automotive paint shops'
				},
				{
					id   : 7538,
					name : 'Automotive service shops (non-dealer)'
				},
				{
					id   : 7542,
					name : 'Car washes'
				},
				{
					id   : 7549,
					name : 'Towing services'
				},
				{
					id   : 7622,
					name : 'Electronics repair shops'
				},
				{
					id   : 7623,
					name : 'Air conditioning and refrigeration repair shops'
				},
				{
					id   : 7629,
					name : 'Electrical and small appliance repair shops'
				},
				{
					id   : 7631,
					name : 'Watch, clock and jewellery repair shops'
				},
				{
					id   : 7641,
					name : 'Furniture reupholstery, repair and refinishing'
				},
				{
					id   : 7692,
					name : 'Welding services'
				},
				{
					id   : 7699,
					name : 'Miscellaneous repair shops and related services'
				},
				{
					id   : 7829,
					name : 'Motion picture and video tape production and distribution'
				},
				{
					id   : 7832,
					name : 'Motion picture theatres'
				},
				{
					id   : 7841,
					name : 'Video tape rentals'
				},
				{
					id   : 7911,
					name : 'Dance halls, studios and schools'
				},
				{
					id   : 7922,
					name : 'Theatrical producers (except motion pictures) and ticket agencies'
				},
				{
					id   : 7929,
					name : 'Bands, orchestras and miscellaneous entertainers - not elsewhere classified'
				},
				{
					id   : 7932,
					name : 'Billiard and pool establishments'
				},
				{
					id   : 7933,
					name : 'Bowling alleys'
				},
				{
					id   : 7941,
					name : 'Commercial sports, professional sports clubs, athletic fields and sports promoters'
				},
				{
					id   : 7991,
					name : 'Tourist attractions and exhibits'
				},
				{
					id   : 7992,
					name : 'Public golf courses'
				},
				{
					id   : 7993,
					name : 'Video amusement game supplies'
				},
				{
					id   : 7994,
					name : 'Video game arcades and establishments'
				},
				{
					id   : 7996,
					name : 'Amusement parks, circuses, carnivals and fortune tellers'
				},
				{
					id   : 7997,
					name : 'Membership clubs (sports, recreation, athletic), country clubs and private golf courses'
				},
				{
					id   : 7998,
					name : 'Aquariums, seaquariums and dolphinariums'
				},
				{
					id   : 7999,
					name : 'Recreation services - not elsewhere classified'
				},
				{
					id   : 8011,
					name : 'Doctors and physicians - not elsewhere classified'
				},
				{
					id   : 8021,
					name : 'Dentists and orthodontists'
				},
				{
					id   : 8031,
					name : 'Osteopaths'
				},
				{
					id   : 8041,
					name : 'Chiropractors'
				},
				{
					id   : 8042,
					name : 'Optometrists and ophthalmologists'
				},
				{
					id   : 8043,
					name : 'Opticians, optical goods and eyeglasses'
				},
				{
					id   : 8049,
					name : 'Podiatrists and chiropodists'
				},
				{
					id   : 8050,
					name : 'Nursing and personal care facilities'
				},
				{
					id   : 8062,
					name : 'Hospitals'
				},
				{
					id   : 8071,
					name : 'Medical and dental laboratories'
				},
				{
					id   : 8099,
					name : 'Medical services and health practitioners - not elsewhere classified'
				},
				{
					id   : 8111,
					name : 'Legal services and attorneys'
				},
				{
					id   : 8211,
					name : 'Elementary and secondary schools'
				},
				{
					id   : 8220,
					name : 'Colleges, universities, professional schools and junior colleges'
				},
				{
					id   : 8241,
					name : 'Correspondence schools'
				},
				{
					id   : 8244,
					name : 'Business and secretarial schools'
				},
				{
					id   : 8249,
					name : 'Trade and vocational schools'
				},
				{
					id   : 8299,
					name : 'Schools and educational services - not elsewhere classified'
				},
				{
					id   : 8351,
					name : 'Child care services'
				},
				{
					id   : 8641,
					name : 'Civic, social and fraternal associations'
				},
				{
					id   : 8675,
					name : 'Automobile associations'
				},
				{
					id   : 8699,
					name : 'Membership organizations - not elsewhere classified'
				},
				{
					id   : 8734,
					name : 'Testing laboratories (non-medical)'
				},
				{
					id   : 8911,
					name : 'Architectural, engineering and surveying services'
				},
				{
					id   : 8931,
					name : 'Accounting, auditing and bookkeeping services'
				},
				{
					id   : 8999,
					name : 'Professional services - not elsewhere classified'
				},
				{
					id   : 9399,
					name : 'Government Services - not elsewhere classified'
				}


			],
			
			optionsBar : {
				chart : {
					toolbar : {
						show : false,
					},
					zoom : {
						enabled : false,
					},
					sparkline : {
						enabled : true,
					},
				},
				legend : {
					show : false,
				},
				xaxis : {
					show : false,
				},
				yaxis : {
					show : false,
				},
				colors     : ['#4f46e5', '#DC2626'],
				dataLabels : {
					enabled : false,
				},
				stroke : {
					curve : 'straight',
				},
			},

			seriesBar : [
				{
					name : '5 Stars',
					data : [30, 40, 45, 50, 49, 60, 70, 91],
				},
				{
					name : '4 Stars',
					data : [55, 88, 66, 22, 44, 12, 88, 62] ,
				},
				{
					name : '3 Stars',
					data : [20, 34, 45, 55, 79, 87, 90, 98],
				},
				{
					name : '2 Stars',
					data : [22, 3, 55, 44, 22, 83, 88, 22],
				},
				{
					name : '1 Star  ',
					data : [20, 34, 45, 55, 79, 87, 90, 98],
				},
			],
			optionsTransactions : {
				chart : {
					toolbar : {
						show : false,
					},
					zoom : {
						enabled : false,
					},
					sparkline : {
						enabled : true,
					},
				},
				legend : {
					show : false,
				},
				xaxis : {
					show : false,
				},
				yaxis : {
					show : false,
				},
				colors     : ['#4f46e5'],
				dataLabels : {
					enabled : false,
				},
				fill : {
					type     : 'gradient',
					gradient : {
						shadeIntensity : 0,
						opacityFrom    : 0,
						opacityTo      : 0.3,
						stops          : [0, 90, 100],
					},
				},
				stroke : {
					curve : 'smooth',
				},
			},

			seriesTransactions : [
				{
					name : 'Transactions ',
					data : [30, 40, 45, 50, 49, 60, 70, 91],
				},
			],
			optionsDonut : {
				chart : {
					type : 'donut',
				},
				legend     : false,
				dataLabels : {
					enabled : false,
				},
				labels : ['admin', 'SuperAdmin', 'User', 'Costumer'],
			},

			seriesDonut      : [20, 15, 63, 83],
			tableTransaction : [
				{
					transaction       : 'Shopify',
					technologies      : 'Apr 22, 2022',
					statusTransaction : 'Working',
				},
				{
					transaction       : 'Payment from Taylor neal',
					technologies      : 'May 2, 2022',
					statusTransaction : 'Suspended',
				},
				{
					transaction       : 'Payment from Tobi Ferreira',
					technologies      : 'May 5, 2022',
					statusTransaction : 'Inactive',
				},
				{
					transaction       : 'Payment failed from #046577',
					technologies      : 'May 5, 2022',
					statusTransaction : 'cancelled',
				},
			],
		};
		// end chart data line
	},
	mounted() {},
};
</script>
