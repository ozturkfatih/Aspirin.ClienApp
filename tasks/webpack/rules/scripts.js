module.exports = (env, envs) => {
    return {
        test: /\.ts($|\?)|\.tsx($|\?)/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'ts-loader'
            }
        ]
    }
};