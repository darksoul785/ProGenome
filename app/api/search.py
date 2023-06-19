from Bio import Entrez, SeqIO

def getTest():
    Entrez.email = "A.N.Other@example.com"
    with Entrez.efetch(
        db="nucleotide", rettype="gb", retmode="text", id="6273291,6273290,6273289"
    ) as handle:
        for seq_record in SeqIO.parse(handle, "gb"):
            print("%s %s..." % (seq_record.id, seq_record.description[:50]))
            print(
                "Sequence length %i, %i features, from: %s"
                % (
                    len(seq_record),
                    len(seq_record.features),
                    seq_record.annotations["source"],
                )
            )