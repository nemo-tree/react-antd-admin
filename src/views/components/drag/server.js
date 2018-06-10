import api from '@/axios'


export const getListData = () =>  {
  return new Promise(reslove => {
    api.post('/GetDnfList').then(res => {
      const { datas } = res.data
      reslove(datas)
    })
  })

}