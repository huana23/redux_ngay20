
const gameState= {
    mangXuXi: [
      {hinh:'./img/Game/bao.png',chon:bao},
      {hinh:'./img/Game/bua.png',chon:bua},
      {hinh:'./img/Game/keo.png',chon:keo},
    ],
    banChon:true,
    banThang:0,
    tongSoBan:0
}
export const gameReducer = (state = gameState,action) => {
    switch (action) {

    
        default: return state;
    }
}

