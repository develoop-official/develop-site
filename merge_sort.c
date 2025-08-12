#include <stdio.h>
#include <string.h>

#define MAX_N 500002
#define INF   0x7f7f7f7f

int input_row[MAX_N];       //ソーティング対象の整数を格納する配列
int division[MAX_N/2+2];    //マージの処理途中に分割した配列の左半分を一時的にコピーしておくための作業用配列
int cnt;                    //比較回数カウント

//マージソートのアルゴリズム部分（変更なし）
void merge_sort(int low, int high) { 
    int i, j, k, p, mid; 

    if (low < high) {
        mid = (low + high) / 2;                 //ビットシフト(>> 1)から除算(/ 2)に変更（どちらでも構いません）
        merge_sort(low,   mid);
        merge_sort(mid+1, high);

        cnt += high - low + 1;

        p = mid - low + 1;
        memcpy(division, input_row + low, p * sizeof(int));    //バイト数計算を sizeof(int) を使った形に変更
        i = mid + 1, j = 0; k = low;

        division[p] = INF;
        while (i <= high && j < p) { //ループ条件をより安全な形に変更
            if (division[j] <= input_row[i]) {
                input_row[k++] = division[j++];
            } else {
                input_row[k++] = input_row[i++];
            }
        }
        //ループを抜けた後、残った要素をコピーする
        while(j < p) {
            input_row[k++] = division[j++];
        }
        //右半分(a[i])が残ることはないため、そのコピー処理は不要
    }
}


int main(){
    int number, val;
    
    //要素数を入力
    scanf("%d", &number);

    //配列の各要素を入力
    for (val = 0; val < number; val++) {
        scanf("%d", &input_row[val]);
    }

    cnt = 0;
    merge_sort(0, number-1);

    //ソート後の配列を出力
    for (val = 0; val < number; val++) {
        printf("%d%c", input_row[val], (val == number - 1) ? '\n' : ' ');
    }

    //比較回数を出力
    printf("%d\n", cnt);

    return 0;
}