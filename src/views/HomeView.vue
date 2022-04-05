<template>
  <div class="home">
    <button @click="getSelectedRows()">Get Selected Rows</button>
    <ag-grid-vue
      style="width: 100%; height: 90vh"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :autoGroupColumnDef="autoGroupColumnDef"
      rowSelection="multiple"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "HomeView",
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,

      gridApi: null,
      columnApi: null,

      autoGroupColumnDef: {
        headerName: "Model",
        field: "model",
        cellRenderer: "agGroupCellRenderer",
        cellRendererParams: {
          checkbox: true,
        },
      },
    };
  },
  beforeMount() {
    this.columnDefs = [
      {
        field: "make",
        sortable: true,
        filter: true,
        checkboxSelection: true,
        rowGroup: true,
      },
      { field: "model", sortable: true, filter: true },
      { field: "price", sortable: true, filter: true },
    ];

    // this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxter", price: 72000 },
    // ];
    this.getData();
  },
  methods: {
    getData() {
      fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then((result) => result.json())
        .then((rowData) => (this.rowData = rowData));
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.api;
      console.log(this.gridApi, this.columnApi);
    },
    getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data);
      const selectedDataStringPresentation = selectedData
        .map((node) => `${node.make} ${node.model}`)
        .join(", ");
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    },
  },
};
</script>
