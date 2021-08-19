#El usuario envía el valor correcto, devuelve "¡Lo conseguiste!".
#El usuario envía un número más alto, devuelve "¡La suposición fue demasiado alta!".
#El usuario envía un número más bajo, devuelve "¡La suposición fue demasiado baja!".

puts "ingresa un número: "
valor = gets.chomp.to_i

def adivina_numero(valor)
    # tu código aquí
    if valor == 25
        puts "Adivinaste el número, ¡Lo conseguiste!"
    elsif valor < 25
        puts "¡La suposición fue demasiado baja!"
    elsif valor > 25
        puts "¡La suposición fue demasiado alta!"
    end
end 

adivina_numero(valor)