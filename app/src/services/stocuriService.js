const stocuriMock = [
    {
      id: 1,
      nume: 'Cereale',
      categorie: 'hrana',
      cantitate: 500,
      unitate: 'kg',
      pragMinim: 100,
      pret: 1.5
    },
    {
      id: 2,
      nume: 'Fân',
      categorie: 'hrana',
      cantitate: 200,
      unitate: 'kg',
      pragMinim: 50,
      pret: 0.8
    },
    {
      id: 3,
      nume: 'Vitamina E',
      categorie: 'medicamente',
      cantitate: 20,
      unitate: 'flacoane',
      pragMinim: 5,
      pret: 45
    },
    {
      id: 4,
      nume: 'Antibiotic',
      categorie: 'medicamente',
      cantitate: 3,
      unitate: 'flacoane',
      pragMinim: 5,
      pret: 120
    }
  ]
  
  export async function getStocuri() {
    return new Promise(resolve => {
      setTimeout(() => resolve([...stocuriMock]), 300)
    })
  }
  
  export async function createStoc(stoc) {
    return new Promise(resolve => {
      setTimeout(() => {
        const nou = { ...stoc, id: Date.now() }
        stocuriMock.push(nou)
        resolve(nou)
      }, 300)
    })
  }
  
  export async function editStoc(id, date) {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = stocuriMock.findIndex(s => s.id === id)
        stocuriMock[index] = { ...stocuriMock[index], ...date }
        resolve(stocuriMock[index])
      }, 300)
    })
  }
  
  export async function removeStoc(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = stocuriMock.findIndex(s => s.id === id)
        stocuriMock.splice(index, 1)
        resolve()
      }, 300)
    })
  }