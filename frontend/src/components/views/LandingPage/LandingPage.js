import React, {
    useState,
    useEffect,
} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LandingPage(props) {
    const onClickHandler = () => {
        axios
            .get(`/api/users/logout`)
            .then((res) => {
                if (res.data.success) {
                    props.history.push('/login');
                } else {
                    alert(
                        '로그아웃 하는데 실패 했습니다.'
                    );
                }
            });
    };

    return (
        <>
            <div style={{}}>
                <h2>시작 페이지</h2>
                <button onClick={onClickHandler}>
                    로그아웃
                </button>
            </div>
        </>
    );
}

export default withRouter(LandingPage);
