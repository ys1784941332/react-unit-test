测试
### pnpm test 测试文件路径

1. 生成快照
### react-scripts test --updateSnapshot

2. 生成覆盖率测试报告
### pnpm test -- --coverage a

3. 覆盖率测试报告  package.json 中设置 
### 
"jest": {
    设置测试报告要收集的文件
    "collectCoverageFrom": [
      "src/components/**/*.{j,t}s?(x)",
      "src/hooks/**/*.{j,t}s?(x)",
      "!<rootDir>/node_modules/"
    ],
    覆盖率阈值
    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },
    覆盖率报告类型配置
    "coverageReporters": [
      "text"
    ]
  }