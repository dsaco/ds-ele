<template>
	<h3>
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ElAlert',
	setup() {},
});
</script>
