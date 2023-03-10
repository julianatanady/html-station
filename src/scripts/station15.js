async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  let userList1 = userList.map(buildFullName)

  const result = await test(userList1)
  return await result
}

function buildFullName(data) {
  return userList1 = {id: data.id, full_name: data.family_name + ' ' + data.first_name,
              first_name: data.first_name, family_name: data.family_name, affilication: data.affilication,
              is_student: data.is_student}}

function test(text) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text);
    }, 3000)
  })
}

