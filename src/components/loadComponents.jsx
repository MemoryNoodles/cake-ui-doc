/**
 * @component  MyLoadingComponent
 * @param  {isLoading} isLoading isLoading,是否显示加载组件,默认带出
 * @param  {error} error error加载组件错误的信息
 * */
import React from 'react';


const MyLoadingComponent = ({isLoading, error}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        console.log(error);
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
export default MyLoadingComponent