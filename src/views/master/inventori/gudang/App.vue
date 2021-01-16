<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Master Data Gudang</strong>
          <div class="card-header-actions">

          </div>
        </CCardHeader>
        <CCardBody>
          <div>
            <v-content>
              <v-container>
                <div>
                  <v-data-table
                      :headers="headers"
                      :items="data_gudang"
                      :options.sync="options"
                      :server-items-length="total_data"
                      :loading="loading"
                      class="elevation-1"
                  >
                    <template v-slot:items="props">
                      <td class="text-xs-center">{{ props.item.neo_reference_id }}</td>
                      <td class="text-xs-center">{{ props.item.name }}</td>
                      <td class="text-xs-center"></td>
                    </template>
                  </v-data-table>
                </div>
              </v-container>
            </v-content>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<script>
	export default {
		name: 'Gudang',
    data() {
		  return {
		    data_gudang:[],
        options: {},
        loading: true,
        total_data: 0,
		    headers: [
          {
            text: 'ID',
            align: 'middle',
            sortable: true,
            value: 'id',
          },
          {
            text: 'Nama',
            align: 'left',
            sortable: false,
            value: 'nama',
          },
          {
            text: 'Aksi',
            align: 'left',
            sortable: false,
            value: 'aksi',
          },
        ]
      }
    },
    watch: {
		  pagination: {
		    handler() {
		      this.getDataGudang().then(function(data) {
		        /*this.data_gudang = data.items
            this.total_data = data.total*/
          })
        },
        deep: true
      }
    },
    mounted() {
		  this.getDataGudang()
      .then(function(data) {
        /*this.data_gudang = data.items
        this.total_data = data.total*/
        console.log(data)
      })
    },
    methods: {
      getDataGudang() {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.options
          const local_pagination = this.options
          let local_loading = this.loading
          let items = this.$store.dispatch('gudang/get_data')
              .then(function(response) {
                let items = response.response_package.response_data
                const total = items.length
                if (local_pagination.sortBy) {
                  items = items.sort((a, b) => {
                    const sortA = a[sortBy]
                    const sortB = b[sortBy]

                    if (descending) {
                      if (sortA < sortB) return 1
                      if (sortA > sortB) return -1
                      return 0
                    } else {
                      if (sortA < sortB) return -1
                      if (sortA > sortB) return 1
                      return 0
                    }
                  })
                }

                if (rowsPerPage > 0) {
                  items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                }
                local_loading = false
                resolve({
                  items,
                  total
                })
          })
              .catch(function(err) {
                reject(err)
              })
        })
      }
    }
	}
</script>