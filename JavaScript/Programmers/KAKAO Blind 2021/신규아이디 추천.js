function solution(new_id) {
  const answer = '';
  //step 1
  new_id = new_id.toLowerCase();
  //step 2
  let pos = new_id.indexOf('.');
  let searchText = new_id.match(/[~!@#$%^&*+()=\[\]\{\}:?,<>]/g);
  if (searchText) {
    for (let i = 0; i < searchText.length; i++) {
      let pos = new_id.indexOf(searchText[i]);
      while (pos !== -1) {
        new_id = new_id.replace(searchText[i], '');
        pos = new_id.indexOf(searchText[i], pos + 1);
      }
    }
  }

  console.log('step2:', new_id);
  //step 3
  const remove = [];
  for (let i = 0; i < new_id.length; i++) {
    if (new_id[i] === '.') {
      let j = i + 1;
      while (new_id[j] === '.') {
        j++;
      }
      if (j !== i + 1) {
        remove.push('.'.repeat(j - i));
      }

      i += j - i;
    }
  }
  for (let i = 0; i < remove.length; i++) {
    new_id = new_id.replace(remove[i], '.');
  }
  console.log('step3:', new_id);
  //step4
  if (new_id[0] === '.') new_id = new_id.slice(1);
  if (new_id[new_id.length - 1] === '.')
    new_id = new_id.slice(0, new_id.length - 1);
  console.log('step4:', new_id);

  //step5
  if (!new_id) new_id += 'a';
  console.log('step5:', new_id);

  //step6
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  if (new_id[new_id.length - 1] === '.')
    new_id = new_id.slice(0, new_id.length - 1);
  console.log('step6:', new_id);
  //step7
  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id += new_id[new_id.length - 1];
    }
  }
  return new_id;
}
