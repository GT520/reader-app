<template>
	<div class="category-container">
		<m-head :title="'分类'" :center="true">
    </m-head>
		<div class="category-view">
			<male-Category :maleCategory="categorylist.male">
      </male-Category>
			<female-Category :femaleCategory="categorylist.female">
      </female-Category>
		</div>
	</div>
</template>

<script>
  import HeaderView from '../header/HeaderView'
  import MaleCategory from './MaleCategory'
  import FemaleCategory from './FemaleCategory'
  import {getCategories} from '../../api/api'

	export default{
		name:'category',
		data(){
			return{
				categorylist:{}
			}
		},
		components:{
			'm-head':HeaderView,
			'male-Category':MaleCategory,
			'female-Category':FemaleCategory,
		},
		created(){
			getCategories().then((res)=>{
				this.categorylist=res.data;
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
</script>

<style type="text/css">
  body a{
    margin:0;
    color: #555;
  }

	.category-container{
		position: relative;
		height: 92vh;
		overflow:hidden;
    padding-bottom: 25px;
	}

	.category-view{
		height: 97.5%;
		overflow-y:scroll;
	}
</style>
