import random
import time
import copy
import sys
import matplotlib.pyplot as plt
import japanize_matplotlib

#　Pythonの再帰呼び出しの深さの上限を増やす（クイックソート用）
#　データサイズが10万の場合、デフォルトの上限（通常1000）ではエラーになる可能性があるため設定
sys.setrecursionlimit(600000)

#　------ソーティングアルゴリズム一覧---------------------------------
#　選択ソート
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

#挿入法
def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

#マージソート
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr

#　クイックソート
def quick_sort(arr):
    def _quick_sort(items, low, high):
        if low < high:
            partition_index = partition(items, low, high)
            _quick_sort(items, low, partition_index - 1)
            _quick_sort(items, partition_index + 1, high)

    def partition(items, low, high):
        pivot = items[high]
        i = low - 1
        for j in range(low, high):
            if items[j] <= pivot:
                i += 1
                items[i], items[j] = items[j], items[i]
        items[i + 1], items[high] = items[high], items[i + 1]
        return i + 1

    _quick_sort(arr, 0, len(arr) - 1)
    return arr
#　--------------------------------------------------------------


#　乱数生成関数
def random_generator(size):
    """指定されたサイズの、0からsize*10までの整数の乱数リストを生成する"""
    return [random.randint(0, size * 10) for _ in range(size)]

#　------メイン---------------------------------------------------
# 比較するデータサイズ
data_sizes = [10000, 30000, 50000, 100000,300000,500000]

# 比較するソートアルゴリズムの関数をまとめた辞書
sort_algorithms = {
    "選択ソート": selection_sort,
    "挿入ソート": insertion_sort,
    "マージソート": merge_sort,
    "クイックソート": quick_sort
}

# 各アルゴリズムの処理時間を記録するための辞書
execution_times = {name: [] for name in sort_algorithms.keys()}

# 時間計測
# 1万から順に測定する。n個のランダムデータを生成して、それぞれのソーティングアルゴリズムでソーティングしていく。
# 終わったら次は3万、5万と測定する
for size in data_sizes:
    print(f"--- データサイズ: {size} の処理時間計測 ---")

    random_data = random_generator(size)

    for name, sort_function in sort_algorithms.items():
        data_to_sort = copy.deepcopy(random_data)

        # 開始時間と、終了時間を測定する。
        start_time = time.time()
        sort_function(data_to_sort)
        end_time = time.time()

        # 経過時間 = 終了時間 - 開始時間
        elapsed_time = end_time - start_time
        execution_times[name].append(elapsed_time)
        print(f"'{name}' の処理時間: {elapsed_time:.4f} 秒")
    print("\n")

# グラフ描画
plt.figure(figsize=(12, 8))

# 計測結果をループでプロット
for name, times in execution_times.items():
    plt.plot(data_sizes, times, marker='o', linestyle='-', label=name)

plt.title('ソートアルゴリズムの処理時間比較', fontsize=16)         # グラフのタイトル
plt.xlabel('入力データサイズ (n)', fontsize=12)                 # 横軸
plt.ylabel('処理時間 (秒)', fontsize=12)                       # 縦軸
plt.xticks(data_sizes)                                       # x軸の目盛りをデータサイズに合わせる
plt.legend()
plt.grid(True)                                               # グリッド線を表示

#　グラフの表示と保存
file_name = "sorting_measurement(5).png"                    # 保存名
plt.savefig(file_name)                                      # グラフを保存
plt.show()                                                  # グラフを表示
#　--------------------------------------------------------------