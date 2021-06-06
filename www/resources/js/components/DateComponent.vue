<template>
  <div>
    <b-card  v-if="valueDate == ''"> 
      <b-calendar block locale="es-Es"  v-model="valueDate" ></b-calendar>      
    </b-card>
    <b-card v-else>
       <div>
    <label for="example-input">Elige la hora</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="valueHour"
        type="text"
        placeholder="HH:mm:ss"
      ></b-form-input>
      <b-input-group-append>
        <b-form-timepicker
          v-model="value"
          button-only
          right
          show-seconds
          locale="en"
          aria-controls="example-input"
        ></b-form-timepicker>
      </b-input-group-append>
    </b-input-group>
    <p>Value: '{{ value }}'</p>
  </div>
    </b-card>
    
  </div>
</template>
<script>
export default {
  data() {
      return {
        valueDate: '',
        valueHour: '',
        context: null
      }
    },
};
</script>
<style scoped></style>
