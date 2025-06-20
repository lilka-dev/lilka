KICAD_CLI = kicad-cli
BUILDER = dirhtml

.PHONY: all
all: clean pdf
	sphinx-build -M $(BUILDER) . _build

.PHONY: pdf
pdf:
	$(KICAD_CLI) sch export pdf ../hardware/v2/main.kicad_sch -t Dark -o _gen/v2_schematic.pdf
	$(KICAD_CLI) pcb export pdf ../hardware/v2/main.kicad_pcb -l "F.Cu,B.Cu,F.Mask,B.Mask,F.SilkS,B.SilkS,Edge.Cuts" -t Dark --ibt -o _gen/v2_pcb.pdf
.PHONY: autobuild
autobuild: clean
	@echo "Live-reload the documentation"
ifeq ($(OS),Windows_NT)
	sphinx-autobuild -b $(BUILDER) . _build\html
else
	sphinx-autobuild -b $(BUILDER) . _build/html
endif

.PHONY: clean
clean:
ifeq ($(OS),Windows_NT)
	@if exist "_build" rd /s /q "_build"
else
	rm -rf _build
endif
