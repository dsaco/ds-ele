<template>
	<img :src="src" alt="" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ElAvatar',
	props: {
		src: {
			type: String,
			default: '',
		},
	},
	setup() {},
});
</script>
