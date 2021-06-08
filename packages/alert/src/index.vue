<template>
	<h4>
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</h4>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ElAlert',
	setup() {},
});
</script>
