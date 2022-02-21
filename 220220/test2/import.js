// 试试执行 node import

import('./esm/b.js').then(({ foo }) => {
    console.log('using dynamic import with Promise.then...');
    foo();
});


(async () => {
    console.log('using dynamic import with await...');
    const { foo } = await import('./esm/b.js');
    foo();
})();