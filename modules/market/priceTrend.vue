<template>
  <div>
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

