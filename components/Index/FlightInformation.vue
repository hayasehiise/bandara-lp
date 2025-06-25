<template>
  <div
    class="w-full flex flex-col text-center p-5 gap-3 bg-accent text-accent-content"
  >
    <h2 class="font-bold text-5xl">Live Informasi Penerbangan</h2>
    <h3>Anda dapat melihat informasi live penerbangan melalui link dibawah</h3>
    <div class="w-full flex flex-col gap-3">
      <!-- button link arrival dan departure -->
      <!-- <div class="flex flex-row justify-center gap-3">
          <a class="btn btn-soft btn-info text-2xl p-8 font-bold" href="http://36.91.63.220/en/display/single/arrival-information-1366/?pagetype=CMS&type=PCTV&addr=13.13.13.13"
            ><Icon name="streamline-cyber:airplane-arrival" size="2.5rem" />
            Arrival
          </a>
          <a class="btn btn-soft btn-info text-2xl p-8 font-bold" href="http://36.91.63.220/en/display/single/departure-information-1366/?pagetype=PCTV&addr=12.12.12.12"
            ><Icon name="streamline-cyber:airplane-departure" size="2.5rem" />
            Departure
          </a>
        </div> -->
      <!-- end button link arrival dan departure -->
      <!-- button show arrival dan departure -->
      <div class="flex flex-row justify-center gap-3">
        <a
          class="btn btn-soft btn-info text-2xl p-8 font-bold"
          @click="
            showArrival = true;
            showDeparture = false;
          "
          ><Icon name="streamline-cyber:airplane-arrival" size="2.5rem" />
          Arrival
        </a>
        <a
          class="btn btn-soft btn-info text-2xl p-8 font-bold"
          @click="
            showDeparture = true;
            showArrival = false;
          "
          ><Icon name="streamline-cyber:airplane-departure" size="2.5rem" />
          Departure
        </a>
      </div>
      <div v-if="showArrival">
        <iframe
          src="http://36.91.63.220/en/display/single/arrival-information-1366/?pagetype=CMS&type=PCTV&addr=13.13.13.13"
          class="w-full h-dvh"
        />
      </div>
      <div v-if="showDeparture">
        <iframe
          src="http://36.91.63.220/en/display/single/departure-information-1366/?pagetype=PCTV&addr=12.12.12.12"
          class="w-full h-dvh"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const showArrival = ref(false);
const showDeparture = ref(false);
</script>

<style></style>
