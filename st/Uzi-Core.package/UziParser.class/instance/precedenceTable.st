grammar-binary
precedenceTable
	^ #(
		(**)
		(* / %)
		(+ -)
		(<< >>)
		(< <= > >=)
		(== !=)
		(&)
		(^)
		(|)
		(&&)
		(||)		
	)