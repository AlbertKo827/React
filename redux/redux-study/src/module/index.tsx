


// 액션 타입을 상수로 정의한다
const INCREMENT = 'INCREMENT'; // INCREMENT 액션 타입 상수로 정의
const DECREMENT = 'DECREMENT'; // DECREMENT 액션 타입 상수로 정의

// increment 액션 생성 함수 / 액션 객체 반환
export const increment = () => ({
    type : INCREMENT
})

// decrement 액션 생성 함수 / 액션 객체 반환
export const decrement = () => ({
    type : DECREMENT
})

// reducer는 상태에 변화를 일으키는 함수
// 파라미터는 (현재 상태, 액션 객체) 두개를 받습니다.
// 리듀서가 초기에 사용할 '초기 상태'가 필요합니다.

// 초기 상태
const initialState = {
    number : 0
}

// 리듀서 함수
function reducer(state = initialState, action : any) {
    switch(action.type) { // 액션 객체의 type property를 가져온다
        case INCREMENT : // INCREMENT 액션이면,
            return { 
                ...state,
                number : state.number + action.diff, 
            };
        case DECREMENT : // DECREMENT 액션이면,
            return { 
                ...state,
                number : state.number - action.diff,
            };
        default : // 이 외 다른 액션이면, 현재 상태 반환
            return state;
    }
}


export default reducer;