module.exports = [
    {
        name: 'contest',
        description: 'Get latest list of contest from popular websites',
        options: [{
            name: 'platform',
            type: 'STRING',
            description: 'Choose platform to find contests from',
            required: true,
            choices: [
                {
                    name: 'Hackerearth',
                    value: 'hackerearth.com',
                },
                {
                    name: 'Codeforces',
                    value: 'codeforces.com',
                },
                {
                    name: 'GeeksForGeeks',
                    value: 'geeksforgeeks.org',
                },
                {
                    name: 'CodeChef',
                    value: 'codechef.com',
                },
                {
                    name: 'LeetCode',
                    value: 'leetcode.com',
                },
                {
                    name: 'Atcoder',
                    value: 'atcoder.jp',
                },
            ],
        }],
    },
]
