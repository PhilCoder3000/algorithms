import { mergeSort } from './merge_sort';

describe('Merge sort', () => {
  test('length of array is 1', () => {
    expect(mergeSort([1])).toStrictEqual([1]);
  })

  test('length of array is 2', () => {
    expect(mergeSort([2, 1])).toStrictEqual([1, 2]);
  })

  test('length of array is 3', () => {
    expect(mergeSort([1, 3, 2])).toStrictEqual([1, 2, 3]);
  })

  test('length of array is 3', () => {
    expect(mergeSort([15, 5, 7])).toStrictEqual([5, 7, 14]);
  })
})