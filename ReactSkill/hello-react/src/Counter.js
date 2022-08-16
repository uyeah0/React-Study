import React, {Component} from 'react';

class Counter extends Component{
    state = {
        number:0,
        fixedNumber: 0
    };
    render() {
        const {number, fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회합니다
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다
                onClick={()=>{
                    // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
                    this.setState(prevState => {
                        return{
                            // 업데이트 하고 싶은 내용
                            number: prevState.number +1
                        };
                    });
                    // 위 코드와 아래 코드는 완전히 똑같은 기능을 함
                    // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
                    this.setState(prevState=>({
                        number: prevState.number + 1
                    }));
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;