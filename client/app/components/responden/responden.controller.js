class RespondenController {
  constructor($state, NgTableParams, $http, User, appConfig, blockUI, toastr) {
    "ngInject";
    this.User = User;
    console.log(this)
    this.$state = $state;
    this.apiURL = appConfig.api_url;
    this.$http = $http;
    this.toastr = toastr;
    this.statuses = [
      { id: 'diterima', title: "Diterima"},
      { id: 'ditolak', title: "Ditolak"},
      { id: 'prosesvalidasi', title: "Proses Validasi"}
    ];

    this.tahun = null;
    this.daftarTahun = [
      {
        id: 2016,
        title: 2016
      },
      {
        id: 2017,
        title: 2017
      }
    ];

    // Get the reference to the block service.
    this.myBlockUI = blockUI.instances.get('correspondentBlockUI');

    this.correnspondenceTableParams = new NgTableParams( {
      count: 10,
      sorting: {id: "asc"},
    }, {
      getData: (params) => {

        const sort = params.sorting();
        const filter = params.filter();
        let query = 'page=' + params.url().page + '&includes=respondent,validator';

        angular.forEach(filter, (item, key) => {
          if (key != '$' && item) {
            query += '&search[' + key + ']=' + item
          }

          if (key == 'year') {
            this.tahun = item
          }
        });

        let url = 'validator';
        switch (this.User.getAuth().includes.profile.type) {
          case 'admin':
            url = 'admin'
            break;
          case 'adminlembagaiptek':
            url = 'admin-lembaga-iptek'
            break;
          default:
            url = 'validator'
        }
        const request = {
          method: 'GET',
          url: this.apiURL + '/api/' + url +'/survey?' + query,
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        this.myBlockUI.start();

        return $http(request).then((res) => {
          params.total(res.data.meta.pagination.total);
          return res.data.data;
        }, () => {
          params.total(0);
          return [];
        }).finally(()=>{
          this.myBlockUI.stop()
        });
      },
      counts: []
    });
  }

  unlock = (respondenData) => {
  	const request = {
      method: 'PUT',
      url: respondenData.survey.links.reject,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      }
    };

  	this.$http(request).then((response) => {
  		this.correnspondenceTableParams.reload();
  		this.toastr.success('Responden ' + respondenData.name +' telah di unlock', 'Unlock Responden');
  	}, (data) => {
  		angular.forEach(data.error.message, (message) => {
          this.toastr.error(message, 'Unlock Responden');
        });
  	});
  }

  getLembaga = (organization, id) => {
    let namaLembaga = 'Tidak ditemukan';
    angular.forEach(this[organization], (lembaga) => {
      if (lembaga.id == id) {
        namaLembaga = lembaga.name;
      }
    });

    return namaLembaga;
  }

  getRespondent = () => {
    const request = {
      method: 'GET',
      url: this.apiURL + '/api/validator/survey/random',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      }
    };

    this.myBlockUI.start();

    return this.$http(request).then((res) => {
        this.correnspondenceTableParams.reload()
    }, (err) => {
      this.toastr.error(err.data.error.message, 'Server Error');
    }).finally(()=>{
      this.myBlockUI.stop()
    });
  }

  search = () => {
    this.correnspondenceTableParams.filter({ $: this.searchTerm });
  }

  detail = (survey) => {
    this.$state.go('survey', {survey_id: survey.id, year: survey.year});
  }

  setTahun = (year) => {
    this.tahun = year
    this.correnspondenceTableParams.reload()
  }
}

export default RespondenController;
