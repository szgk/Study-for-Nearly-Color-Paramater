<template>
	<div>
		<header>
			<h1>Study for Nearly Color Param</h1>
			<p class="about">類似色だと判断できるRGBの範囲の検証</p>
		</header>
		<section class="rgb_area">
			<h2>Base color</h2>
			<p class="rgb_area__param">
				rgb(
				<input
					type="number"
					v-model="values[0]"
				/>,
				<input
					type="number"
					v-model="values[1]"
				/>,
				<input
					type="number"
					v-model="values[2]"
				/>)
			</p>
		</section>
		<section class="box_num_area">
			<h2>List num</h2>
			<input
				type="number"
				v-model="boxes"
			/>
		</section>
		<section class="diff_area">
			<h2>Diff</h2>
			<input
				type="number"
				min="0"
				max="255"
				v-model="diff"
			/>
		</section>
		<section class="sample">
			<div
				class="color_bar"
				:style="{background: maxDiffColor}"
			/>
			<div
				class="color_bar"
				:style="{background: `rgb(${values[0]},${values[1]},${values[2]})`}"
			>base color</div>
			<div
				class="color_bar"
				:style="{background: minDiffColor}"
			/>
			<h3>Randum Nearly Colors</h3>
			<ul>
				<li
					class="color_bar"
					v-for="(none, i) in new Array(parseInt(boxes))"
					v-bind:key="i + Math.random()"
					:style="{background: randomRgbs[i]}"
				>{{randomRgbs[i]}}</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	data() { return {
		values: [
			this.randomNum(255),
			this.randomNum(255),
			this.randomNum(255),
		],
		boxes: 10,
		diff: 30,
	}},
	methods: {
		randomNum(max) {
			return Math.floor(Math.random() * max)
		},
	},
	computed: {
		maxDiffColor() {
			return `rgb(${
				parseInt(this.values[0]) + parseInt(this.diff)
			},${
				parseInt(this.values[1]) + parseInt(this.diff)
			},${
				parseInt(this.values[2]) + parseInt(this.diff)
			})`
		},
		minDiffColor() {
			return `rgb(${
				parseInt(this.values[0]) - parseInt(this.diff)
			},${
				parseInt(this.values[1]) - parseInt(this.diff)
			},${
				parseInt(this.values[2]) - parseInt(this.diff)
			})`
		},
		randomRgbs() {
			const rgbs = []
			for(let i = 0; i < this.boxes; i++) {
				rgbs.push(
					`rgb(${
						parseInt(this.values[0]) + this.randomNum(this.diff) - this.randomNum(this.diff)
					},${
						parseInt(this.values[1]) + this.randomNum(this.diff) - this.randomNum(this.diff)
					},${
						parseInt(this.values[2]) + this.randomNum(this.diff) - this.randomNum(this.diff)
					})`
				)
			}
			return rgbs
		}
	}
}
</script>

<style lang="stylus">
// reset
html
body
ul
li
section
h1
h2
h3
	margin 0
	padding 0
ul
	list-style none

// common
body
	padding 20px
h1
h2
h3
	font-weight 100
	color #aaa
section
	margin-bottom 20px
input
	display inline-block
	line-height 10px
h1
	font-size 25px
h2
	font-size 18px
h3
	font-size 16px

.color_bar
	height 30px
	line-height 30px
	width 100%

// header
header
	margin-bottom 40px
.about
	font-size 12px

// rgb area
.rgb_area
	input
		width 50px

	.rgb_area__param
		color #000
</style>
