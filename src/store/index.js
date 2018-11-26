import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state ={
	SourceId:'',
	isShowCatlog:false,
	isShowSource:false,
  isShowFoot:false,
	BookInfo:{},
	RankList:{},
	CategoryList:{},
	SearchResult:{}
}

const mutations ={
		SetCategoryList(state,list){
			state.CategoryList=list;
		},
		SetRankList(state,list){
			state.RankList=list;
		},
		ChangeDetail(state,name){
			if(name == 'catlog'){
				state.isShowCatlog =true;
				state.isShowSource = false;
			}else if(name == 'source'){
				state.isShowSource = true;
				state.isShowCatlog =false;
			}else{
				state.isShowSource = false;
				state.isShowCatlog =false;
			}
		},
		SetSourceId(state,index){
			state.SourceId=index;
		},
		SetBookInfo(state,book){
			state.BookInfo=book;
		},
		SetSearchResult(state,books){
			state.SearchResult = books;
		}
	}

export default new Vuex.Store({
	state,
	mutations
})
