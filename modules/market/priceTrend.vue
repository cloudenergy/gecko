<template>
  <div class="flex " style="flex-direction:column">
    <coinPriceChange></coinPriceChange>
    <bgInfo />
    <movements />
  </div>
</template>

<script>
import { coinPriceChange, bgInfo } from '../coinInfo/index';
import { movements } from '../priceTrend/index';
export default {
	components: {
		coinPriceChange,
		bgInfo,
		movements
	}
};
</script>

