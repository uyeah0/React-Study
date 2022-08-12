function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// 리액트 돔에 렌더 함수를 사용해서 리액트 컴퍼넌트를 돔 컨테이너에 렌더링
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
