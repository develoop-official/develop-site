#include <stdio.h>

//二つの整数を交換する関数
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int low, int high) {
    //配列の最後の要素をピボットとして選択
    int pivot = arr[high];
    
    //iは「ピボット以下の要素が格納されるべき領域」の末尾を指すインデックス
    int i = (low - 1); 

    //lowからhigh-1まで（ピボットを除く全要素）をチェック
    for (int j = low; j <= high - 1; j++) {
        //現在の要素がピボット以下の場合
        if (arr[j] <= pivot) {
            i++; //iを一つ進め、その位置に現在の要素を移動する
            swap(&arr[i], &arr[j]);
        }
    }
    
    //最後に、ピボット(arr[high])をi+1の位置に移動する
    //これで、ピボットの左はそれ以下の値、右はそれ以上の値になる
    swap(&arr[i + 1], &arr[high]);
    
    return (i + 1); //ピボットの最終的な位置を返す
}

void quick_sort(int arr[], int low, int high) {
    //再帰の終了条件：対象範囲に要素が2つ以上ある場合のみ処理
    if (low < high) {
        //partition関数を呼び出し、ピボットの位置(pi)を確定させる
        int pi = partition(arr, low, high);

        //ピボットを境に、2つの部分配列をそれぞれ再帰的にソートする
        quick_sort(arr, low, pi - 1);  //ピボットより左の部分
        quick_sort(arr, pi + 1, high); //ピボットより右の部分
    }
}

//配列の要素を画面に表示する関数
void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5, 3, 6, 2, 4};
    //配列の要素数を計算
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("ソート前の配列: \n");
    print_array(arr, n);

    // クイックソートを実行（配列全体を対象）
    quick_sort(arr, 0, n - 1);

    printf("ソート後の配列: \n");
    print_array(arr, n);

    return 0;
}