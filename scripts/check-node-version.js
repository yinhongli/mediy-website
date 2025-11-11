#!/usr/bin/env node

/**
 * 检查 Node.js 版本是否符合要求
 * 要求：Node.js 16.20.1
 */

const requiredVersion = '16.20.1';
const currentVersion = process.version.replace('v', '');

function compareVersions(v1, v2) {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
        const part1 = parts1[i] || 0;
        const part2 = parts2[i] || 0;
        if (part1 < part2) return -1;
        if (part1 > part2) return 1;
    }
    return 0;
}

if (currentVersion !== requiredVersion) {
    console.error('\n❌ Node.js 版本不匹配！');
    console.error(`   当前版本: v${currentVersion}`);
    console.error(`   要求版本: v${requiredVersion}`);
    console.error('\n请使用以下命令切换到正确的版本：');
    console.error('   nvm install 16.20.1');
    console.error('   nvm use 16.20.1');
    console.error('   或者');
    console.error('   nvm use\n');
    process.exit(1);
} else {
    console.log(`✅ Node.js 版本正确: v${currentVersion}`);
    process.exit(0);
}

