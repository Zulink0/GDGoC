nama = input("Masukkan Nama : ")
quiz = int(input("Masukkan Jumlah Quiz yang Anda Ikuti : "))

for i in range (quiz) :
    print(f"\nNilai Quiz ke-{i+1}")
    nilai = int(input("Masukkan Nilai Quiz Anda : "))

    if nilai >= 90:
        ket = ("Selamat!!")
    elif nilai >=75 :
        ket = ("Not Bad, Masih Bisa Ditingkatkan")
    else : 
        ket = ("Well well well")

    print("Nama : ",nama)
    print(f"Nilai : ",nilai)
    print(f"Keterangan : {ket}")