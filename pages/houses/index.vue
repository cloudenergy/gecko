<template>
    <div>
       1
    </div>
</template>

<script>
    export default {
    	data() {
    		return {
    			links: [
    				{ url: '/houses', text: '房源管理' }
    			]
    		};
		},
		created() {
			console.log(1)
			this.$model('houses')
			.query({}, {projectId: '4866934'})
			.then(res=>{
				console.log(res)
			})
			.catch(err=>{
				console.log(err)
			})
			console.log(2)
		}
    };
</script>

<style>

</style>