<template>
<div>
    <mu-bottom-nav color="pink" :value.sync="shift">
      <mu-bottom-nav-item to='/' title="书架" value="书架" icon="person_outline">
      </mu-bottom-nav-item>
      <mu-bottom-nav-item to="/myBooks" title="今日推荐" value="今日推荐" icon="restore">
      </mu-bottom-nav-item>
      <mu-bottom-nav-item to="/category" title="分类" value="分类" icon="sort">
      </mu-bottom-nav-item>
      <mu-bottom-nav-item to="/rank" title="排行榜" value="排行榜" icon="receipt">
      </mu-bottom-nav-item>
    </mu-bottom-nav>
</div>
</template>

<script>

	export default{
		data(){
			return{
        shift: '书架'
			}
    }
	}
</script>

<style type="text/css">
</style>
